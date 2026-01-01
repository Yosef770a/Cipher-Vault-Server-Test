import {
  msgEncrypt,
  msgDecrypt,
  myMessages
} from "../services/messages.service.js";


export async function msgEncryptController(req, res) {
  try {
    const { cipherType, message } = req.body;
    const username = req.authUser
    if (!(message && cipherType)) {
      return res.status(400).json({ message: "Missing fields" })
    };
    const msg = await msgEncrypt(username, cipherType, message);
    res.status(201).json({
      id: msg.id,
      cipherType: msg.cipher_type,
      encryptedText: msg.encrypted_text
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}



export async function msgDecryptController(req, res) {
  try {
    const messageId = req.body.id;
    if (!messageId) {
      return res.status(400).json({ message: "Missing fields" })
    };
    const msg = await msgDecrypt(messageId);
    res.status(200).json(msg);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}



export async function getMessagesByUserController(req, res) {
  try {
    const username = req.authUser
    const msgs = await myMessages(username)
    res.status(200).json({items: msgs});
  } catch {
    res.status(500).json({ message: "Server error" });
  }
}

