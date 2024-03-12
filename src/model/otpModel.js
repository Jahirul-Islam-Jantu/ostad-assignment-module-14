const mongoose = require("mongoose");

const dataschema = mongoose.Schema(
  {
    email: { type: String, require: true },
    otp: { type: String, require: true },
    status: { type: String, require: true },
  },
  { timestamps: true, versionKey: false }
);

const OTPModel = mongoose.model("otps", dataschema);

module.exports = OTPModel;
