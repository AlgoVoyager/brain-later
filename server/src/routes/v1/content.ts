import express from "express";
const contentRouter = express.Router();
import { testFunc } from "../../controllers/user.js";

contentRouter.get('/test', testFunc);

export default contentRouter;