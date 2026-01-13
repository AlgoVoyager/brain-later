import dotenv from "dotenv"
import express from "express";
import { connectDB } from "./utils/db.js";
import { v1Router } from "./routes/index.js";

dotenv.config()
connectDB()

const app = express();
app.use(express.json())
app.use('/api/v1', v1Router);
// app.use('/',()=>{console.log(1)})

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log("Server running on port: ", PORT)
})