import dotenv from "dotenv"
dotenv.config();

const {
    JWT_USER_SECRET,
    MONGO_URI,
    PORT
} = process.env;

export {
    JWT_USER_SECRET,
    MONGO_URI,
    PORT
}