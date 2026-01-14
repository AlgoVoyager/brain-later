import { RequestHandler } from "express";
import z from "zod";
import { contentModel } from "../utils/db.js";

const contentZodSchema = z.object({
    title: z.string().min(3),
    link: z.string(),
    description: z.string(),
    tags:z.array(z.string()),
    type:z.string(),
})

const createContent : RequestHandler = async (req, res)=> {
    const parsedData = contentZodSchema.safeParse(req.body);
    if(!parsedData.success){
        return res.status(406).json({message:"Insufficient Information!"})
    }
    try{
        const { title, description, tags, type, link } = req.body;
        await contentModel.create({
            title,
            description,
            link,
            tags,
            type,
            //@ts-ignore
            userId:req.userId
        })
        res.json({
            message:"Content Created Succesfully!"
        })
    }catch(error){
        res.status(501).json({message:"Internal Server Error"})
    }
}
const updateContent : RequestHandler = async (req, res)=> {
    const parsedData = contentZodSchema.safeParse(req.body);
    if(!parsedData.success){
        return res.status(406).json({message:"Insufficient Information!"})
    }
    try{
        const { title, description, tags, type, link, contentId } = req.body;
        const content = await contentModel.findOne({
            _id:contentId
        })
        if(!content){
            return res.status(404).json({message:"Content Doesn't Exist!"})
        }


        res.json({
            message:"Content Updated Succesfully!"
        })
    }catch(error){
        console.log(error)
        res.status(501).json({message:"Internal Server Error"})
    }
}
const testContent : RequestHandler = async (req, res) => {
    //@ts-ignore
    const token = req.userId;
    res.json({token})
}


export {
    createContent,
    updateContent,
    testContent
}