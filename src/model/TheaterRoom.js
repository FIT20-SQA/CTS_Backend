import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const theaterRoom = new Schema({
    name : {type :String, required : true},
    rowNum : {type :Number, required : true},
    seatsPerRow : { type : Number, required : true},
    image: { type: String, required: true }
});


export default mongoose.model('TheaterRoom', theaterRoom);