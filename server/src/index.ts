import express from "express";
import { connectDB } from "./utils/db.js";
import { v1Router } from "./routes/index.js";
import { PORT } from "./utils/config.js"

connectDB()

const app = express();
app.use(express.json())
app.use('/api/v1', v1Router);
// app.use('/',()=>{console.log(1)})

app.listen(PORT, () => {
    console.log("Server running on port: ", PORT)
})