const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const upload = require("../middleware/upload");
const auth = require("../middleware/auth");

// Create product
router.post("/", auth, upload.single("image"), async (req, res) => {
  const image = "/upload/" + req.file.filename;
  const product = await Product.create({ ...req.body, image, userId: req.userId });
  res.json(product);
});

// Get all products
router.get("/", async (req, res) => {
  const products = await Product.find({ userId: req.userId });
  res.json(products);
});


router.put("/:id", auth, upload.single("image"), async (req, res) => {
  try {
    const updateData = { ...req.body };

    // If image is provided in the update
    if (req.file) {
      updateData.image = "/upload/" + req.file.filename;
    }

    const updatedProduct = await Product.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      updateData,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ message: "Server error" });
  }
});


// ✅ Get single product by ID
router.get("/:id", auth, async (req, res) => {
  try {
    const product = await Product.findOne({
      _id: req.params.id,
      userId: req.userId,
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Delete product
router.delete("/:id", auth, async (req, res) => {
  await Product.findOneAndDelete({ _id: req.params.id, userId: req.userId });
  res.json({ msg: "Deleted" });
});

module.exports = router;
