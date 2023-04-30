import mongoose from 'mongoose';
import MovieScreenTime from './MovieScreenTime.js';


const Schema = mongoose.Schema;
const movieSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    releaseDate: { type: Date, required: true },
    duration: { type: Number, required: true },
    genre: { type: String, required: true },
    director: { type: String },
    cast: { type: [String] },
    poster: { type: String }
});


movieSchema.pre('deleteOne', async function(next) {
    try {
        // remove all the moviescreenTime associated with the movie
        await MovieScreenTime.deleteMany({movieId: this._id})
        next()
    } catch (error) {
        next(error)
    }
})
export default mongoose.model('Movie', movieSchema);