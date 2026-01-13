import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const connectDB = async () => {
    const conn = await mongoose.connect('mongodb://localhost:27017/brain-later');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
};
const User = new mongoose.Schema({
    firstname : { type : String, required : true },
    lastname : { type : String },
    email : {type: String, required:true, unique:true},
    password : {type: String, required:true}
})

const Content = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    userId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true 
    }
});

const userModel = mongoose.model('User',User);
const contentModel = mongoose.model('Content',Content);
export {
    userModel,
    contentModel,
    connectDB
}