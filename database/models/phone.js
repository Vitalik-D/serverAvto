const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PhoneScheme = new Schema(
  {
    phone: String,
    info: String
  },
  {
    timestamps: true
  }
);

const Phone = mongoose.model("Phone", PhoneScheme);
module.exports = Phone;
