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
    const { updatedContents } = req.body;
    if (!updatedContents) return res.status(406).json({ message: "Invalid Request" });
    await linkModel.updateOne({
        //@ts-ignore
        userId: req.userId
    }, {
        publicSharing: updatedContents
    })
    const userId = (req as any).userId;
    const shareLink = await linkModel.findOne({ userId });

    res.json({
        shareLink
    });
}

export {
    getShare,
    updateShare,
    shareContents
}