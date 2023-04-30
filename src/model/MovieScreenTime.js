import mongoose from "mongoose";
import showtimeSpot from "../enum/ShowtimeSpot";
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

export default mongoose.model('MovieScreenTime', movieScreenTime)