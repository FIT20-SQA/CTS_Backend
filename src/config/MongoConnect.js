import mongoose from 'mongoose';

export default async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/booking');
        console.log("Connected");
    } catch (error) {
        console.log(error);
    }
}


