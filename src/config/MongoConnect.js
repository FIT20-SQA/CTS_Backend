import mongoose from 'mongoose';

export default async function connect() {
    try {
        await mongoose.connect('mongodb://mongo:t7Bt1eUd5BMnMRdRXlXG@containers-us-west-54.railway.app:7575');
        console.log("Connected");
    } catch (error) {
        console.log(error);
    }
}


