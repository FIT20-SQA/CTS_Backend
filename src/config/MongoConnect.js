import mongoose from 'mongoose';

export default async function connect() {
    try {
        await mongoose.connect('mongodb+srv://hainguyen:j0ywL9C6NN7d4qN0@cluster0.a0gabxx.mongodb.net/cts');
        console.log("Connected");
    } catch (error) {
        console.log(error);
    }
}


