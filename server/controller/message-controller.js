const Conversation = require("../models/Conversation");
const Message = require("../models/Message");

exports.newMessage = async (req, res, next) => {
    const newMessage = new Message(req.body);
    try {
        await newMessage.save();
        await Conversation.findByIdAndUpdate(req.body.conversationId, { message: req.body.text });
        return res.status(200).json("message has been sent");
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

exports.getMessage = async (req, res, next) => {
    try {
        const messages = await Message.find({ conversationId: req.params.id });
        return res.status(200).json(messages);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};