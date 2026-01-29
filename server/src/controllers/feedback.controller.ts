import { Request, Response } from "express";
import { feedbackModel } from "../utils/db.js";
const feedbackController = async (req: Request, res: Response) => {
    try {
        const { name, email, message } = req.body;
        const userId = req.userId;
        const feedback = await feedbackModel.create({ name, email, message, userId });
        res.status(201).json({ feedback });
    } catch (error) {
        res.status(500).json({ error });
    }
}

export {
    feedbackController
}