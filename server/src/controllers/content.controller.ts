import { RequestHandler } from "express";
import z from "zod";
import { contentModel, tagModel } from "../utils/db.js";

const contentZodSchema = z.object({
    title: z.string().min(3),
    link: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    type: z.string(),
})

const createContent: RequestHandler = async (req, res) => {
    const parsedData = contentZodSchema.safeParse(req.body);
    if (!parsedData.success) {
        return res.status(406).json({ message: "Insufficient Information!" })
    }
    try {
        const { title, description, tags, type, link } = parsedData.data;
        let tagIds = [];
        for (const tag of tags) {
            let existingTag = await tagModel.findOne({ name: tag });
            if (!existingTag) {
                existingTag = await tagModel.create({ name: tag });
            }
            tagIds.push(existingTag._id);
        }
        const content = await contentModel.create({
            title,
            description,
            link,
            tags: tagIds,
            type,
            //@ts-ignore
            userId: req.userId
        })
        res.json({
            content,
            message: "Content Created Succesfully!"
        })
    } catch (error) {
        console.log(error)
        res.status(501).json({ message: "Internal Server Error" })
    }
}
const updateContent: RequestHandler = async (req, res) => {
    const parsedData = contentZodSchema.safeParse(req.body);
    if (!parsedData.success) {
        return res.status(406).json({ message: "Insufficient Information!" })
    }
    try {
        const { title, description, tags, type, link, contentId } = req.body;
        const content = await contentModel.findOne({
            _id: contentId
        })
        if (!content) {
            return res.status(404).json({ message: "Content Doesn't Exist!" })
        }


        res.json({
            message: "Content Updated Succesfully!"
        })
    } catch (error) {
        console.log(error)
        res.status(501).json({ message: "Internal Server Error" })
    }
}
const getContent: RequestHandler = async (req, res) => {
    //@ts-ignore
    const userId = req.userId;
    const contents = await contentModel.find({
        userId
    }).populate("userId", "firstname").populate('tags')

    res.json(contents);
}
const deleteContent: RequestHandler = async (req, res) => {
    try {
        //@ts-ignore
        const userId = req.userId;
        const { contentId } = req.params;
        if (!contentId) res.status(406).json({ message: "Content doesn't exist!" })
        await contentModel.deleteOne({ _id: contentId });
        res.json({
            message: "Content Deleted succesfully!"
        });
    } catch (error) {
        console.log(error)
        res.status(400).json({message:"Content Deletion Failed"})
        
    }
}
const testContent: RequestHandler = async (req, res) => {
    //@ts-ignore
    const token = req.userId;
    res.json({ token })
}


export {
    createContent,
    updateContent,
    deleteContent,
    getContent,
    testContent
}