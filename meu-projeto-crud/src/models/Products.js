const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Por favor, adicione um nome'],
        unique: true,
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'Por favor, adicione um preço']
    },
    description: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// O primeiro argumento é o nome da coleção no plural no banco (products)
module.exports = mongoose.model('Product', ProductSchema);