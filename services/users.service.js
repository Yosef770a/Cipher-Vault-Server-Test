import {
  insert,
  getObjBy,
  updateObjDB

} from "../dal/users.dal.js";

export async function registerUser(username, password) {
  const doc = {
    username,
    password,
    encryptedMessagesCount: 0,
    createdAt: new Date()

  };
  const res = await insert(doc);
  return {id: res.insertedId, username};
}


export async function getUser(username) {
  return await getObjBy({username: username});
}

export async function updateEncryptCount(username){
  const user = await getUser(username)
  newCount = user.encryptedMessagesCount + 1
  updateObjDB(username, newCount)
}

