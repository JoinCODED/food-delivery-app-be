const express = require("express");
const { createItem, getItems, getItemById } = require("./item.controller");
const itemRouter = express.Router();

itemRouter.post("/", createItem);
itemRouter.get("/", getItems);
itemRouter.get("/:id", getItemById);

module.exports = itemRouter;
