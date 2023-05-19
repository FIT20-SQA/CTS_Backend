import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    foods: [{
        item: {
            type: Schema.Types.ObjectId,
            ref: 'Food',
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
    }],
    drinks: [{
        item: {
            type: Schema.Types.ObjectId,
            ref: 'Drink',
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
    }],
    tickets: [{
        type: Schema.Types.ObjectId,
        ref: 'Ticket',
    }],
    totalPrice: {
        type: Number
    },
    createdAt: {
        type: Date
    },
    staff: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
})



export default mongoose.model('Order', orderSchema);