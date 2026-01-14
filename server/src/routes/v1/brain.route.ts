import express from "express";
import { authenticateUser } from "../../middlewares/user.middleware.js";
import { createShare } from "../../controllers/brain.controller.js";
const brainRouter = express.Router();

brainRouter.post('/',authenticateUser, createShare);

export default brainRouter;