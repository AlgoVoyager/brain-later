import express from "express";
const contentRouter = express.Router();
import { createContent, updateContent, getContent, deleteContent, testContent } from '../../controllers/content.controller.js'
import { authenticateUser, authoriseUser } from "../../middlewares/user.middleware.js";

contentRouter.post('/', authenticateUser, createContent)
contentRouter.get('/', authenticateUser, getContent)
contentRouter.put('/', authenticateUser, updateContent)
contentRouter.delete('/', authenticateUser, deleteContent)

contentRouter.post('/test', authoriseUser, testContent)

export default contentRouter;