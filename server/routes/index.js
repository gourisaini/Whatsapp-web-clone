const express = require('express');
const { addUser, getUser } = require('../controller/user-controller');
const { newConversation, getConversation } = require('../controller/conversation-controller');
const { newMessage, getMessage } = require('../controller/message-controller');
const { uploadFile, getImage } = require('../controller/image-controller');
const upload = require('../utils/upload');

var router = express.Router();

router.post('/add', addUser);

router.get('/users', getUser);

router.post("/conversation/add", newConversation);

router.post("/conversation/get", getConversation);

router.post("/message/add", newMessage);

router.get("/message/get/:id", getMessage);

router.post('/file/upload', upload.single('file'), uploadFile);

router.get('/file/:filename',getImage);


module.exports = router;