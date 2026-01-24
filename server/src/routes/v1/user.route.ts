import express from "express";
const userRouter = express.Router();
import { signInUser, signUpUser,deleteUser, getUser, changeUserFullName, changeUserPassword } from "../../controllers/user.controller.js";
import { authenticateUser } from "../../middlewares/user.middleware.js";


userRouter.post('/signin', signInUser);
userRouter.post('/signup', signUpUser);
userRouter.delete('/deleteUser', authenticateUser, deleteUser);
userRouter.patch('/changeName', authenticateUser, changeUserFullName);
userRouter.patch('/changePassword', authenticateUser, changeUserPassword);
userRouter.get('/getUser', authenticateUser, getUser);

export default userRouter;