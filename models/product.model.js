const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a name for this product.'],
            trim: true,
            maxlength: [50, 'Name cannot be more than 50 characters.'],
        },
        quantity: {
            type: Number,
            required: [true, 'Please provide a quantity for this product.'],
            default: 0,
        },
        price: {
            type: Number,
            required: [true, 'Please provide a price for this product.'],
            default: 0.0,
        },

        image: {
            type: String,
            default: 'no-photo.png',
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
