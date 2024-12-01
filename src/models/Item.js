const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
  },
  description: {
    type: String,
    default: "",
  },
});

const Item = model("Item", itemSchema);

module.exports = Item;
