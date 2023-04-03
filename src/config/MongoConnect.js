import mongoose from 'mongoose';

export default async function connect() {
    try {
        await mongoose.connect('mongodb://mongo:xMm9q9TLxGTYfEHEm69a@containers-us-west-52.railway.app:7136');
        console.log("Connected");
    } catch (error) {
        console.log(error);
    }
}


