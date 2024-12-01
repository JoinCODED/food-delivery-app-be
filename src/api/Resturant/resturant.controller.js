const Category = require("../../models/Category");
const Resturant = require("../../models/Resturant");

const createResturant = async (req, res, next) => {
  try {
    const { name, rating, image, category, deliveryTime } = req.body;
    const resturant = await Resturant.create({
      name,
      rating,
      image,
      category,
      deliveryTime,
    });

    await Category.findByIdAndUpdate(category, {
      $push: { restaurants: resturant._id },
    });
    return res.status(201).json(resturant);
  } catch (error) {
    next(error);
  }
};

const getResturants = async (req, res, next) => {
  try {
    const resturants = await Resturant.find()
      .populate("category", "name")
      .populate("items");
    return res.status(200).json(resturants);
  } catch (error) {
    next(error);
  }
};

const getResturantById = async (req, res, next) => {
  try {
    const resturant = await Resturant.findById(req.params.id)
      .populate("category", "name")
      .populate("items");
    return res.status(200).json(resturant);
  } catch (error) {
    next(error);
  }
};

const getResturantItems = async (req, res, next) => {
  try {
    const resturant = await Resturant.findById(req.params.id).populate("items");
    return res.status(200).json(resturant.items);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  createResturant,
  getResturants,
  getResturantById,
  getResturantItems,
};
