const express = require("express");
const router = express.Router();
const Category = require("../models/Category");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  const category = await Category.create({ ...req.body, userId: req.userId });
  res.json(category);
});

router.get("/", async (req, res) => {
  const categories = await Category.find({ userId: req.userId });
  res.json(categories);
});

router.put("/:id", auth, async (req, res) => {
  try {
    const category = await Category.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      req.body,
      { new: true }
    );

    if (!category) return res.status(404).json({ msg: "Category not found" });

    res.json(category);
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ msg: "Server error" });
  }
});

router.delete("/:id", auth, async (req, res) => {
  await Category.findOneAndDelete({ _id: req.params.id, userId: req.userId });
  res.json({ msg: "Deleted" });
});

module.exports = router;