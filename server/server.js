// server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const newsletterRoute = require("./routes/newsletter");
app.use("/api/newsletter", newsletterRoute);

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/mrtrappy")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Product Schema
const productSchema = new mongoose.Schema({
  title: String,
  category: String,
  price: Number,
  emoji: String,
  meta: [String],
});

const Product = mongoose.model("Product", productSchema);

// Seed sample products (run once)
async function seedProducts() {
  const count = await Product.countDocuments();
  if (count === 0) {
    await Product.insertMany([
      {
        title: "Premium Pre-roll Pack",
        category: "Pre-roll",
        price: 25.0,
        emoji: "🌿",
        meta: ["THC: 22%", "5 x 0.5g"],
      },
      {
        title: "CBD Pain Relief Capsules",
        category: "Pharma",
        price: 45.0,
        emoji: "💊",
        meta: ["30mg CBD", "30 capsules"],
      },
      {
        title: "Blue Dream",
        category: "Flower",
        price: 55.0,
        emoji: "🌸",
        meta: ["THC: 24%", "3.5g"],
      },
      // ...add more products as needed
    ]);
    console.log("Sample products seeded");
  }
}
seedProducts();

// API endpoint
app.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
