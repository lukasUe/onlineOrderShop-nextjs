import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

let cached = global.mongoose;

if(!cached) {
    cached = global.mongoose = {conn: null, promise: null}
}

async function dbConnect () {
    if(cached.conn) {
        //console.log("DB Verbindung aktiv");
        return cached.conn;
    }

    if(!cached.promise) {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false,
        }

        cached.promise = mongoose.connect(process.env.MONGODB_URI, options).then((mongoose) => {
            //console.log("DB Verbindung gestartet");
            return mongoose;
        })
    }

    try {
    cached.conn = await cached.promise;
    } catch (e){
        cached.promise = null;
        throw(e);
    }

    return cached.conn;
}

async function dbDisconnect() {
    await mongoose.disconnect();
    //console.log("DB Verbindung beendet");
}

const mongodb = {dbConnect, dbDisconnect}

export default mongodb;