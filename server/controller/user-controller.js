const User = require("../models/User");

exports.addUser = async (req, res, next) => {
    try {
        let exist = await User.findOne({ sub: req.body.sub });
        if (exist) {
            return res.status(200).json({ msg: "user already exist" });
        }
        const newUser = await new User(req.body).save();
        return res.status(200).json(newUser);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

exports.getUser = async (req, res, next) => {
    try {
        const user = await User.find({});
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json(error);
    }
};
