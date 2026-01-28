import express from "express";
import { authenticateUser, authoriseUser } from "../../middlewares/user.middleware.js";
import { getShare, updateShare, shareContents, removeAllShared } from "../../controllers/brainlink.controller.js";
const brainRouter = express.Router();

brainRouter.get('/share', authenticateUser, getShare);
brainRouter.patch('/share', authenticateUser, updateShare);
brainRouter.patch('/share/remove-all', authenticateUser, removeAllShared);

brainRouter.get('/:hash', authoriseUser, shareContents);

export default brainRouter;