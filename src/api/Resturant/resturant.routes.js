const express = require("express");
const {
  createResturant,
  getResturants,
  getResturantById,
  getResturantItems,
} = require("./resturant.controller");
const resturantRouter = express.Router();

resturantRouter.post("/", createResturant);
resturantRouter.get("/", getResturants);
resturantRouter.get("/:id", getResturantById);
resturantRouter.get("/:id/items", getResturantItems);

module.exports = resturantRouter;
