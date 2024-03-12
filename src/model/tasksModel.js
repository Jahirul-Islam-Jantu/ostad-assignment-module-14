const mongoose = require("mongoose");

const dataschema = mongoose.Schema(
  {
    title: { type: String, require: true },
    description: { type: String, require: true },
    status: { type: String, require: true },
  },
  { timestamps: true, versionKey: false }
);

const taskModel = mongoose.model("tasks", dataschema);

module.exports = taskModel;
