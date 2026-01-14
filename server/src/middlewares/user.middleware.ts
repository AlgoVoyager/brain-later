import { RequestHandler } from "express";
import jwt from "jsonwebtoken"
import { JWT_USER_SECRET } from "../utils/config.js";

const authenticateUser: RequestHandler = (req, res, next) => {

    const token = req.headers["token"];
    if (!token) return res.status(403).json({ message: "Unauthorized Request!" });

    if (!JWT_USER_SECRET) return res.status(501).json({ message: "Internal Server Error" });
    const decoded = jwt.verify(token as string, JWT_USER_SECRET);
    if (decoded) {
        //@ts-ignore
        req.userId = decoded.userId;
        next()
    } else {
        return res.status(403).json({ message: "Unauthorized Request!" });
    }
}
const authoriseUser: RequestHandler = (req, res, next) => {

    const token = req.headers["token"];
    if (token && JWT_USER_SECRET) {
        try {
            const decoded = jwt.verify(token as string, JWT_USER_SECRET);
            if (decoded) {
                //@ts-ignore
                req.userId = decoded.userId;
            }
            next();
        } catch (error) {
            console.log(error)
            next();
        }
    } else next()
}
export {
    authenticateUser,
    authoriseUser
}