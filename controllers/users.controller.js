import { registerUser, getUser } from "../services/users.service.js";

export async function registerController(req, res) {
  try {
    console.log("hdxsdxsdxsdxsdxsdxsdxsdxsdxsdxsdxs")
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "Missing username or password" })
    }

    const user = await registerUser(username, password);
    return res.status(201).json(user);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}


export async function getMyProfile(req, res) {
  try {
    const username = req.authUser
    const user = await getUser(username);
    res.status(200).json({
      username: user.username,
      encryptedMessagesCount: user.username
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}