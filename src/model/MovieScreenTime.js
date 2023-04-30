import mongoose from "mongoose";
import showtimeSpot from "../enum/ShowtimeSpot.js";
import Ticket from './Ticket.js'

const Schema = mongoose.Schema;

const movieScreenTime = new Schema({
    movieId: {
        type: Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    },
    theaterRoomId: {
        type: Schema.Types.ObjectId,
        ref: 'TheaterRoom',
        required: true
    },
    showtimeSpot: {
        type: String,
        required: true,
        enum: Object.values(showtimeSpot)
    },
    tickets: [{
        type: Schema.Types.ObjectId,
        ref: 'Ticket'
    }],
    showtimeDate: { type: Date, required: true }
})

movieScreenTime.pre('deleteOne', async function (next) {
    try {
        // remove all the tickets associated with the movieScreenTime
        await Ticket.deleteMany({ movieScreenTimeId: this._id })
        next()
    } catch (error) {
        next(error)
    }
})
export default mongoose.model('MovieScreenTime', movieScreenTime)