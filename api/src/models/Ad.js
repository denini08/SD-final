const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    contato: {
        type: String,
        required: true
    },
    createdBy:{
        name: String,
        id  : String,
        email: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

mongoose.model('Ad', ProductSchema);