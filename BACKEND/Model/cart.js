const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
        user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customers",
        required: true,
    },

    cartItems:[
        { 
            product: {type:mongoose.Schema.Types.ObjectId,ref:"showCaseProduct",required:true},
           quantity: {type: Number, default: 1},
            unitprice: {type: Number},
            addedAt: {type: Date, default: Date.now}
        }
    ],
    totalAmount:{type:Number}
    }, { timestamps: true });

module.exports = mongoose.model("Cart", cartSchema);