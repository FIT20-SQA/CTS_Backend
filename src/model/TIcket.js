import e from "express";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Ticket = new Schema({
    movieScreenTimeId: {
        type: Schema.Types.ObjectId,
        ref: 'MovieScreenTime',
        required: true
    },
    seatCode: { type: String, required: true },
    row: { type: Number, required: true },
    column: { type: Number, required: true },
    price: { type: Number, required: true },
    status: { type: String, required: true, default: 'available' }
},{
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
});

Ticket.virtual('seatCode')
    .get(function () {
        const rowCode = `R${this.row + 1}`;
        return `${rowCode}.${this.column}`;
    })
    .set(function (value) {
        this.row = Number(value.split('.')[0].slice(1) - 1);
        this.column = Number(value.split('.')[1]);
    });


export default mongoose.model('Ticket', Ticket);