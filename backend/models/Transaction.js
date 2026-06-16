const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
    {
        amount: {
            type: Number,
            required: true,
            min: 0
        },

        category: {
            type: String,
            required: true,
            trim: true
        },

        type: {
            type: String,
            enum: ["income", "expense"],
            required: true
        },

        date: {
            type: Date,
            required: true
        },

        note: {
            type: String,
            trim: true,
            default: ""
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Transaction", transactionSchema);