const Category = require("../../models/Category");

const createCategory = async (req, res, next) => {
  try {
    const { name, image } = req.body;
    const category = await Category.create({ name, image });
    return res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};

const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find()
      .populate("restaurants")
      .populate({
        path: "restaurants",
        populate: {
          path: "items",
        },
      });
    return res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};

module.exports = { createCategory, getCategories };
