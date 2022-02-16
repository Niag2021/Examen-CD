const mongoose = require("mongoose");

const PiratasTypeSchema = new mongoose.Schema({
  name: String,
});

const PiratasType = mongoose.model("PiratasType", PiratasTypeSchema);

module.exports = PiratasTypeSchema;

module.exports = PiratasType;
