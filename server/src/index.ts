import dotenv from "dotenv"
import express from "express";
import mongoose from "mongoose"
import jwt from "jsonwebtoken"
// import userRouter from "./routes/user.js";

dotenv.config()
const PORT = process.env.PORT
const app = express();

app.post('api/v1/user/signin',(req,res)=>{
    res.json({})
})
app.post('api/v1/user/signup',(req,res)=>{
    res.json({})
})

app.post('api/v1/content',(req,res)=>{
    res.json({})
})
app.get('api/v1/content',(req,res)=>{
    res.json({})
})
app.delete('api/v1/content',(req,res)=>{
    res.json({})
})

app.use('api/v1/brain/share',(req,res)=>{
    res.json({})
})
app.use('api/v1/brain/:shareLink',(req,res)=>{
    res.json({})
})

app.listen(PORT, ()=>{
    console.log("Server running on port: ", PORT)
})
