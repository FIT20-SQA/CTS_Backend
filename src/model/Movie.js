import mongoose from 'mongoose';


const Schema = mongoose.Schema;
const movieSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    duration: { type: Number, required: true },
    genre: { type: String, required: true },
    director: { type: String, required: true },
    cast: { type: [String], required: true },
    poster: { type: String, required: true }
});

export default mongoose.model('Movie', movie);