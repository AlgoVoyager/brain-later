import express from "express";
const userRouter = express.Router();
import { testFunc } from "../controllers/user.js";

userRouter.get('/test',testFunc);

export default userRouter;