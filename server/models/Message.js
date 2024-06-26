const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
    {
        conversationId: {
            type: String
        },
        senderId: {
            type: String
        },
        receiverId: {
            type: String
        },
        type: {
            type: String
        },
        text: {
            type: String
        },
    },
    { timestamps: true }
);

const message = mongoose.model("Message", MessageSchema);
module.exports = message;