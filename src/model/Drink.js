import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Drink = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    inStock: { type: Number, required: true }
});

export default mongoose.model('Drink', Drink);