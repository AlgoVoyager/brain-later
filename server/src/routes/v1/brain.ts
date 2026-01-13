import express from "express";
const brainRouter = express.Router();
import { testFunc } from "../../controllers/user.js";

brainRouter.get('/test', testFunc);

export default brainRouter;