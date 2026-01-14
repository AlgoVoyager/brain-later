import express from "express";
const contentRouter = express.Router();
import { createContent, updateContent, testContent } from '../../controllers/content.controller.js'
import { authenticateUser, authoriseUser } from "../../middlewares/user.middleware.js";

contentRouter.post('/', authenticateUser, createContent)
contentRouter.put('/', authenticateUser, updateContent)
contentRouter.post('/test', authoriseUser, testContent)

export default contentRouter;