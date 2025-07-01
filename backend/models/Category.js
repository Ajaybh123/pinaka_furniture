const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryName: { type: String, required: true },
  userId: String,
});

module.exports = mongoose.model("Category", categorySchema);