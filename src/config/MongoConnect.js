import mongoose from 'mongoose';

export default async function connect() {
    try {
        await mongoose.connect('mongodb://mongo:gWXmSMcgGPtPSKnHrrKZ@containers-us-west-17.railway.app:6741');
        // await mongoose.connect('mongodb://localhost:27017/cts');
        console.log("Connected");
    } catch (error) {
        console.log(error);
    }
}


