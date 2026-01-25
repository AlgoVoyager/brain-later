import express from "express";
import { authenticateUser, authoriseUser } from "../../middlewares/user.middleware.js";
import { getShare, updateShare, shareContents } from "../../controllers/brainlink.controller.js";
const brainRouter = express.Router();

brainRouter.get('/share', authenticateUser, getShare);
brainRouter.patch('/share', authenticateUser, updateShare);

brainRouter.get('/:hash', authoriseUser, shareContents);

export default brainRouter;