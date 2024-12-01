const express = require("express");
const {
  createCategory,
  getCategories,
} = require("./category.controller");
const categoryRouter = express.Router();

categoryRouter.post("/", createCategory);
categoryRouter.get("/", getCategories);

module.exports = categoryRouter;
