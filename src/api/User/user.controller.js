const User = require("../../models/User");
const { hashPassword } = require("../../utils/hash");
const { generateToken } = require("../../utils/token");

const login = async (req, res, next) => {
  try {
    const token = generateToken({
      username: req.user.username,
      _id: req.user._id,
      image: req.user.image,
    });
    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

const register = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (req.file) {
      req.body.image = req.file.path;
    }
    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      username: username,
      password: hashedPassword,
      image: req.body.image,
    });
    const token = generateToken({
      username: user.username,
      _id: user._id,
      image: user.image,
    });
    return res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

const profile = async (req, res, next) => {
  try {
    return res.status(200).json(req.user);
  } catch (error) {
    next(error);
  }
};

module.exports = { login, register, profile };
