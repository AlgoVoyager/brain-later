import { RequestHandler } from "express";
import { linkModel, contentModel } from "../utils/db.js";

const shareContents: RequestHandler = async (req, res) => {
    // const userId = (req as any).userId;
    const hash = req.params.hash;
    const sharedContents = await linkModel.findOne({ hash })
        .populate("publicSharing")
        .populate("userId", "fullname");

    res.json({
        sharedContents
    });
}
const getShare: RequestHandler = async (req, res) => {
    const userId = (req as any).userId;
    const shareLink = await linkModel.findOne({ userId })
        .populate("publicSharing")
        .populate("userId", "fullname");

    res.json({
        shareLink
    });
}
const updateShare: RequestHandler = async (req, res) => {
    const { contentId } = req.body;
    if (!contentId) return res.status(406).json({ message: "Missing Content" });

    try {
        // First, check if content exists and belongs to user
        const content = await contentModel.findOne({
            _id: contentId,
            //@ts-ignore
            userId: req.userId
        });

        if (!content) {
            return res.status(404).json({ message: "Content not found" });
        }

        // Check if content is already in publicSharing
        const shareLink = await linkModel.findOne({
            //@ts-ignore
            userId: req.userId
        });

        const isCurrentlyShared = shareLink?.publicSharing?.includes(contentId);

        if (isCurrentlyShared) {
            // Remove from publicSharing array
            await linkModel.updateOne({
                //@ts-ignore
                userId: req.userId
            }, {
                $pull: {
                    publicSharing: contentId
                }
            });

            // Set shared to false
            await contentModel.updateOne({
                _id: contentId
            }, {
                $set: { shared: false }
            });

            res.json({
                message: "Content Unshared Successfully"
            });
        } else {
            // Add to publicSharing array
            await linkModel.updateOne({
                //@ts-ignore
                userId: req.userId
            }, {
                $addToSet: {
                    publicSharing: contentId
                }
            });

            // Set shared to true
            await contentModel.updateOne({
                _id: contentId
            }, {
                $set: { shared: true }
            });

            res.json({
                message: "Content Shared Successfully"
            });
        }
    } catch (error) {
        console.log(error);
        res.status(501).json({
            message: "Content Share Toggle Failed"
        });
    }
}

export {
    getShare,
    updateShare,
    shareContents
}