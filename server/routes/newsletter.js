const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// NewsletterSubscriber model
const newsletterSubscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  subscribedAt: { type: Date, default: Date.now },
});

const NewsletterSubscriber = mongoose.model(
  "NewsletterSubscriber",
  newsletterSubscriberSchema
);

// POST /api/newsletter
router.post("/", async (req, res) => {
  const { email } = req.body;
  if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    return res.status(400).json({ message: "Invalid email address." });
  }
  try {
    // Prevent duplicate subscriptions
    const existing = await NewsletterSubscriber.findOne({ email });
    if (existing) {
      return res.status(200).json({ message: "Already subscribed." });
    }
    await NewsletterSubscriber.create({ email });
    res.status(201).json({ message: "Subscribed successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
});

module.exports = router;
