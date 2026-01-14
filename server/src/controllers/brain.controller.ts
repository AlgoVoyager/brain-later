import { RequestHandler } from "express";
import z from "zod";
import { linkModel } from "../utils/db.js";
import { generateHash } from "../utils/hashGenerator.js";

const createShare :RequestHandler = async (req, res) => {
    const { share } = req.body;
    if(!share) return res.status(406).json({message:"Invalid Request"});
    const hash = generateHash(20) 
    await linkModel.create({
        hash,
        //@ts-ignore
        userId: req.userId
    })
    
}

export {
    createShare
}