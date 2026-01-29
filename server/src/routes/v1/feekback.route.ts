import { Router } from "express";
import { feedbackController } from "../../controllers/feedback.controller.js";
import { authoriseUser } from "../../middlewares/user.middleware.js";
const router = Router();
router.post('/', authoriseUser, feedbackController);

export default router;