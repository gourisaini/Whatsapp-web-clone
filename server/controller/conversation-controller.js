const Conversation = require("../models/Conversation");

exports.newConversation = async (req, res, next) => {
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;
    const exist = await Conversation.findOne({ members: { $all: [receiverId, senderId] } });
    if (exist) {
        res.status(200).json("conversation already exist");
        return;
    }
    const newConversation = new Conversation({
        members: [senderId, receiverId]
    });

    try {
        const savedConversation = await newConversation.save();
        response.status(200).json(savedConversation);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

exports.getConversation = async (req, res, next) => {
    try {
        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId;
        const conversation = await Conversation.findOne({ members: { $all: [senderId, receiverId] } });
        res.status(200).json(conversation);
    } catch (error) {
        return res.status(500).json(error);
    }
};