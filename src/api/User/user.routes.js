const { Router } = require("express");
const { login, register, profile } = require("./user.controller");
const userRouter = Router();
const passport = require("passport");
const upload = require("../../middleware/multer");

userRouter.post(
  "/login",
  passport.authenticate("local", { session: false }),
  login
);
userRouter.post("/register", upload.single("image"), register);
userRouter.get("/profile", passport.authenticate("jwt", { session: false }), profile);
module.exports = userRouter;
