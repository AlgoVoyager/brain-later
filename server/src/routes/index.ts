import express from "express";
import userRouter from "./v1/user.js";
import contentRouter from "./v1/content.js";
import brainRouter from "./v1/brain.js";
const v1Router = express.Router();

v1Router.use('v1/user', userRouter);
v1Router.use('v1/content', contentRouter);
v1Router.use('v1/brain', brainRouter);

export {
    v1Router,
}