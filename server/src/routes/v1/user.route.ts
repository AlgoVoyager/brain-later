import express from "express";
const userRouter = express.Router();
import { signInUser, signUpUser } from "../../controllers/user.controller.js";


userRouter.post('/signin', signInUser);
userRouter.post('/signup', signUpUser);

export default userRouter;