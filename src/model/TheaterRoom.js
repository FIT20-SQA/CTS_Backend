import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const theaterRoom = new Schema({
    name : {
        type :String,
        require : [true],
        unique : false,
        maxLength: 255,
        minLength: 2
    },
    rows : {
        type :Number,
        require : [true],
        unique : false,
        maxLength: 255,
        minLength: 2
    },
    seatsPerRow : {
        type :Number,
        require : [true],
        unique : false,
        maxLength: 255,
        minLength: 2
    },
});


export default mongoose.model('TheaterRoom', theaterRoom);