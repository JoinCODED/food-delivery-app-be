const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    default: "",
  },
  restaurants: [{ type: Schema.Types.ObjectId, ref: "Restaurant" }],
});

const Category = model("Category", categorySchema);

module.exports = Category;
