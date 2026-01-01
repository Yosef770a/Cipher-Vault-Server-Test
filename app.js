import express from "express";
// import dotenv from "dotenv";
import messageRoutes from "./routes/messages.routes.js";
import { authMiddleware } from "./middleware/auth.middleware.js";
import { registerController, getMyProfile } from "./controllers/users.controller.js";

const app = express();
app.use(express.json());

app.post("/api/auth/register", registerController);
app.get("/api/users/me", authMiddleware, getMyProfile);
app.use("/api/messages", authMiddleware, messageRoutes);


app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});