import { Router } from "express";
import { getUser, getUsers } from "../controllers/userController.js";
import authorize from "../middlewares/authMiddleware.js";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", authorize, getUser);

userRouter.post("/", (req, res) => res.send({ title: "CREATE New User" }));

userRouter.put("/:id", (req, res) => res.send({ title: "UPDATE User Info" }));

userRouter.delete("/:id", (req, res) => res.send({ title: "DELETE User" }));

export default userRouter;
