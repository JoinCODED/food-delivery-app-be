const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    default: "",
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  deliveryTime: {
    type: String,
    default: "",
  },
  items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
});

const Restaurant = model("Restaurant", restaurantSchema);

module.exports = Restaurant;
