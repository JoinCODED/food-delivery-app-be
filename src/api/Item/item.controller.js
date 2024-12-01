const Item = require("../../models/Item");
const Resturant = require("../../models/Resturant");

const createItem = async (req, res, next) => {
  try {
    const { name, price, image, resturant, description } = req.body;
    const item = await Item.create({
      name,
      price,
      image,
      resturant,
      description,
    });
    await Resturant.findByIdAndUpdate(resturant, {
      $push: { items: item._id },
    });
    return res.status(201).json(item);
  } catch (error) {
    next(error);
  }
};

const getItems = async (req, res, next) => {
  try {
    const items = await Item.find();
    return res.status(200).json(items);
  } catch (error) {
    next(error);
  }
};

const getItemById = async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.id);
    return res.status(200).json(item);
  } catch (error) {
    next(error);
  }
};
module.exports = { createItem, getItems, getItemById };
