import express from "express";
const userRouter = express.Router();
import { signInUser, signUpUser,deleteUser } from "../../controllers/user.controller.js";
import { authenticateUser } from "../../middlewares/user.middleware.js";


userRouter.post('/signin', signInUser);
userRouter.post('/signup', signUpUser);
userRouter.delete('/deleteUser', authenticateUser, deleteUser);

export default userRouter;