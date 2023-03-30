import mongoose from 'mongoose';


const Schema = mongoose.Schema;
const movie = new Schema({
    title : {
        type :String,
        require : [true],
        unique : false,
        maxLength: 255,
        minLength: 2
    },
    description : {
        type :String,
        require : [true],
        unique : false,
        maxLength: 255,
        minLength: 2
    },
    releaseDate : {
        type :Date,
        require : [true],
        unique : false,
        maxLength: 255,
        minLength: 2
    },
    duration : {
        type :Number,
        require : [true],
        unique : false,
        maxLength: 255,
        minLength: 2
    },
    genre : {
        type :String,
        require : [true],
        unique : false,
        maxLength: 255,
        minLength: 2
    },
    director : {   
        type :String,
        require : [true],
        unique : false,
        maxLength: 255,
        minLength: 2
    },
    cast : {
        type :String,
        require : [true],
        unique : false,
        maxLength: 255,
        minLength: 2
    },
    poster : {
        type :String,
        require : [true],
        unique : false,
        maxLength: 2055,
        minLength: 2,
    }

})

export default mongoose.model('Movie', movie);