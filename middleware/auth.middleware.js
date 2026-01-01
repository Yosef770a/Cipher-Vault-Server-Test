import { getUser } from "../services/users.service.js";

export async function authMiddleware(req, res, next) {
  try {
    const { username, password } = req.headers;
    console.log(username, password )
    const user = await getUser(username)
    console.log(user)
    if (!user || !(user.username === username && user.password == password)){
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.authUser = username;

    next();
  } catch(err) {
    res.status(500).json({err: err.message});
  }
}