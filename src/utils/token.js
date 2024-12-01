const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const { SECRET_KEY } = process.env;

const generateToken = (payload) => {
  const token = jwt.sign(payload, SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN || "1h",
  });
  return token;
};

module.exports = { generateToken };
