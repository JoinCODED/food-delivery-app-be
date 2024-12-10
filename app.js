//imports
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./src/models");
const userRouter = require("./src/api/User/user.routes");
const passport = require("passport");
const { localStrategy, jwtStrategy } = require("./src/middleware/passport");
const errorHandler = require("./src/middleware/errorHandler");
const notFoundHandler = require("./src/middleware/notFoundHandler");
const categoryRouter = require("./src/api/Category/category.routes");
const resturantRouter = require("./src/api/Resturant/resturant.routes");
const itemRouter = require("./src/api/Item/item.routes");

//inits
dotenv.config();
const app = express();
app.use(cors());
app.use(morgan("dev"));
const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(passport.initialize());
passport.use("local", localStrategy);
passport.use("jwt", jwtStrategy);

//routes
app.use("/api/auth", userRouter);
app.use("/api/category", categoryRouter);
app.use("/api/resturant", resturantRouter);
app.use("/api/item", itemRouter);

//middlewares
app.use('/media', express.static(path.join(__dirname, "media")));
app.use(errorHandler);
app.use(notFoundHandler);

//server
connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
