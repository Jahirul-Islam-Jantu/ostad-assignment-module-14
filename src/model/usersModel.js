const mongoose = require("mongoose");

const dataschema = mongoose.Schema(
  {
    email: { type: String, unique: true, require: true },
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    phone: { type: String, unique: true, require: true },
    password: { type: String, require: true },
  },
  { timestamps: true, versionKey: false }
);

const usersmodel = mongoose.model("users", dataschema);

module.exports = usersmodel;
