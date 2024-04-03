const express = require("express");
const cors = require("cors");
require('dotenv').config();
require("./models/db");
const bodyParser = require("body-parser")
const indexRouter = require("./routes/index")

const app = express();

const Port = process.env.PORT;

app.listen(Port, () => console.log(`Server is running successfully on Port ${Port}`));

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', indexRouter);