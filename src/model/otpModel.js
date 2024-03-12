const mongoose = require("mongoose");

const dataschema = mongoose.Schema(
  {
    title: { type: String, require: true },
    description: { type: String, require: true },
    status: { type: String, require: true },
  },
  { versionKey: false }
);

const OTPModel = mongoose.model("otps", dataschema);

module.exports = OTPModel;
