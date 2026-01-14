import mongoose from "mongoose";
import dotenv from "dotenv"
import { MONGO_URI } from "./config.js";
dotenv.config()

const connectDB = async () => {
    const conn = await mongoose.connect(MONGO_URI || '');
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
    link : { type: String },
    type : { type: String },
    tags: [{
        type: mongoose.Types.ObjectId,
        ref: 'Tag'
    }],
    userId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true 
    }
});

const Link = new mongoose.Schema({
    hash:{type: String, required: true},
    userId: { 
        type: mongoose.Types.ObjectId,
        ref: 'User', 
        required: true 
    }
})

const userModel = mongoose.model('User',User);
const contentModel = mongoose.model('Content',Content);
const linkModel = mongoose.model('Link',Link);

export {
    userModel,
    contentModel,
    linkModel,
    connectDB
}