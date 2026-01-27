import mongoose from "mongoose";
import dotenv from "dotenv"
import { MONGO_URI } from "./config.js";
dotenv.config()

const connectDB = async () => {
    const conn = await mongoose.connect(MONGO_URI || '');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
};
const User = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

const Content = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    link: { type: String },
    type: { type: String },
    tags: [{
        type: mongoose.Types.ObjectId,
        ref: 'Tag'
    }],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    shared: { type: Boolean, default: false }
});
const Tag = new mongoose.Schema({
    name:{ type: String, unique: true }
})

const Link = new mongoose.Schema({
    hash: { type: String, required: true, unique: true },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    publicSharing: {
        type: [{
            type: mongoose.Types.ObjectId,
            ref: 'Content'
        }],
        default: []
    }
})

const userModel = mongoose.model('User', User);
const contentModel = mongoose.model('Content', Content);
const tagModel = mongoose.model('Tag', Tag);
const linkModel = mongoose.model('Link', Link);

export {
    userModel,
    contentModel,
    tagModel,
    linkModel,
    connectDB
}