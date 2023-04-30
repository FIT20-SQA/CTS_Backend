import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    food: {
        item: {
            type: Schema.Types.ObjectId,
            ref: 'Food',
        },
        quantity: {
            type: Number,
            required: true,
            default: 1
        },
    },
    drink: {
        item: {
            type: Schema.Types.ObjectId,
            ref: 'Drink',
        },
        quantity: {
            type: Number,
            required: true,
            default: 1
        },
    },
    ticket: {
        type: Schema.Types.ObjectId,
        ref: 'Ticket',
    },
    totalPrice: {
        type: Number,
        required: true,
    },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
})

orderSchema.virtual('totalPrice')
.get(function () {
    const foodPrice = (this.food.item.price || 0) * this.food.quantity;
    const drinkPrice = (this.drink.item.price || 0) * this.drink.quantity;
    const ticketPrice = this.ticket.price;
    return foodPrice + drinkPrice + ticketPrice;
})

export default mongoose.model('Order', orderSchema);