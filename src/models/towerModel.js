const mongoose = require("mongoose");

const towerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  location: { type: String, required: true },
  status: { type: String, enum: ["active", "inactive"], default: "active" },
});

const Tower = mongoose.model("Tower", towerSchema);
module.exports = Tower;
