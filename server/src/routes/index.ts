import express from "express";
import userRouter from "./v1/user.route.js";
import contentRouter from "./v1/content.route.js";
import brainRouter from "./v1/brain.route.js";
import feedbackRouter from "./v1/feekback.route.js";
const v1Router = express.Router();
v1Router.use('/user', userRouter);
v1Router.use('/content', contentRouter);
v1Router.use('/brain', brainRouter);
v1Router.use('/feedback', feedbackRouter);

export {
    v1Router,
}