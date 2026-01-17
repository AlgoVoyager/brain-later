import { RequestHandler } from "express";
import z from "zod";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { linkModel, userModel } from "../utils/db.js"
import { JWT_USER_SECRET } from "../utils/config.js";
import { generateHash } from "../utils/hashGenerator.js";
const signInUser: RequestHandler = async (req, res) => {
    const signinSchema = z.object({
        email: z.email(),
        password: z.string().min(6).refine((p) => /[A-Z]/.test(p) && /[a-z]/.test(p) && /[0-9]/.test(p) && /[^A-Za-z0-9]/.test(p), {
            message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        })
    })
    const parsedBody = signinSchema.safeParse(req.body);
    if (!parsedBody.success) {
        const errorCause = JSON.parse(parsedBody.error.message)[0]
        return res.status(401).json({
            message: `${errorCause.path[0]} - ${errorCause.message}`
        })
    }
    try {
        const { email, password } = parsedBody.data;
        const user = await userModel.findOne({ email });
        if (!user) return res.status(401).json({ message: "User Doesn't Exist" });
        const userId = user._id.toString();
        const hashedPassword = user.password;

        const matchPassword = await bcryptjs.compare(password, hashedPassword);
        // console.log(matchPassword)
        if (!matchPassword) return res.status(403).json({ message: "Incorrect Password!" });
        const token = jwt.sign({ userId }, JWT_USER_SECRET || '123BRAIN')
        // console.log(token)
        res.json({
            token,
            message: "User Signin Succesfully"
        })
    } catch (error) {
        console.log(error)
        res.status(501).json({ message: "Server Error" })
    }
}
const signUpUser: RequestHandler = async (req, res) => {
    const signupSchema = z.object({
        firstname: z.string().min(3).max(30),
        lastname: z.string().min(3).max(30),
        email: z.email(),
        password: z.string().min(6).refine((p) => /[A-Z]/.test(p) && /[a-z]/.test(p) && /[0-9]/.test(p) && /[^A-Za-z0-9]/.test(p), {
            message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        })
    });

    const parsedBody = signupSchema.safeParse(req.body);
    if (!parsedBody.success) {
        const errorCause = JSON.parse(parsedBody.error.message)[0]
        return res.status(401).json({
            message: `${errorCause.path[0]} - ${errorCause.message}`
        })
    }
    try {
        const { firstname, lastname, email, password } = parsedBody.data;
        const user = await userModel.findOne({ email });
        if (user) return res.status(409).json({ message: "user Already Exist" });
        const hashedPassword = await bcryptjs.hash(password, 10);
        const createdUser = await userModel.create({
            firstname, lastname, email, password: hashedPassword
        })
        const shareHash = generateHash();
        await linkModel.create({
            hash:shareHash,
            //@ts-ignore
            userId:createdUser._id
        })
        res.json({
            message:"User Created Succesfully",
        })
    } catch (error) {
        res.status(501).json("Internal server error");
    }

}
const deleteUser: RequestHandler = async (req, res) => {
    const userId = (req as any).userId;
    await userModel.deleteOne({_id:userId});
    await linkModel.deleteOne({userId});
    res.json({message:"User Deleted Succesfully"})
}
export {
    signInUser,
    signUpUser,
    deleteUser
}