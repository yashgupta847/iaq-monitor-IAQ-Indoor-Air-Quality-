// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// Schema + Model
const feedbackSchema = new mongoose.Schema({
  email: { type: String, required: false },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
const Feedback = mongoose.model("Feedback", feedbackSchema);

// Routes
app.post("/feedback", async (req, res) => {
  const { email, message } = req.body;
  if (!message) return res.status(400).json({ error: "Message required" });

  try {
    await new Feedback({ email, message }).save();
    res.json({ success: true, msg: "Feedback saved" });
  } catch (err) {
    console.error("❌ Error saving feedback:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
