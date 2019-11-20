const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BuyScheme = new Schema(
    {
        list: Array
    },
    {
        timestamps: true
    }
);

const Buy = mongoose.model("Buy", BuyScheme);
module.exports = Buy;
