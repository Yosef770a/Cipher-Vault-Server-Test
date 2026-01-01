import { insertToDB, findRowByID, findByUsername } from "../dal/messages.dal.js";
import { cipherRevers } from "../utils.js";
import { updateEncryptCount } from "./users.service.js";


function encryptByMethod(cipher_type, text){
  let encrypted_text;
    if (cipher_type === 'reverse') {
    encrypted_text = cipherRevers(text);
  }
  return encrypted_text
}


function decryptByMethod(cipher_type, text){
  let decrypt_text;
    if (cipher_type === 'reverse') {
    decrypt_text = cipherRevers(text);
  }
  return decrypt_text
}



export async function msgEncrypt(username, cipher_type, text) {
  const encrypted_text = encryptByMethod(cipher_type, text)
  if (!encrypted_text) throw new Error('It is mandatory to choose a valid encryption method');
  
  const ObjMsg = {
    username,
    cipher_type, 
    encrypted_text,
  }
  const { data, error } = await insertToDB(ObjMsg);
  await updateEncryptCount(username)
  if (error) throw new Error(error);
  return data;
}


export async function msgDecrypt(id) {
  const { data, error } = await findRowByID(id);
  if (error || !data) throw new Error("Message does not exist");
  const decryptedText = decryptByMethod(data.cipher_type, data.text)

  return {id: data.id, decryptedText};
}


export async function myMessages(username) {
  const { data, error } = await findByUsername(username);
  if (error || !data) throw new Error("No messages found for this user.");
  return data;
}