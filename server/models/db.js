const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

mongoose
    .connect(process.env.MONGO_DB)
    .then(() => console.log("db connected!"))
    .catch((err) => console.log(err.message));