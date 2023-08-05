const express = require("express");
const app = express();
const path = require("path");

var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var bodyParser = require("body-parser");

const indexRouter = require("./routes/index");

require("./models/db");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,"public")));

app.use('/', indexRouter);

app.listen(8080,()=>{
    console.log("server running on 8080");
})