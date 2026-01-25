import { RequestHandler } from "express";
import { linkModel } from "../utils/db.js";

const shareContents: RequestHandler = async (req, res) => {
    // const userId = (req as any).userId;
    const hash = req.params.hash;
    const sharedContents = await linkModel.findOne({ hash })
    .populate("publicSharing")
    .populate("userId","fullname");

    res.json({
        sharedContents
    });
}
const getShare: RequestHandler = async (req, res) => {
    const userId = (req as any).userId;
    const shareLink = await linkModel.findOne({ userId })
    .populate("publicSharing")
    .populate("userId","fullname");

    res.json({
        shareLink
    });
}
const updateShare: RequestHandler = async (req, res) => {
    const { contentId } = req.body;
    if (!contentId) return res.status(406).json({ message: "Missing Content" });
    try {
        await linkModel.updateOne({
            //@ts-ignore
            userId: req.userId
        }, {
            $addToSet: {
                publicSharing: contentId
            }
        })
        res.json({
            message:"Content Shared Succesfully"
        });
    } catch (error) {
        res.status(501).json({
            message:"Content Shared Failed"
        });
    }
}

export {
    getShare,
    updateShare,
    shareContents
}