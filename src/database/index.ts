import mongoose from 'mongoose'
import 'dotenv/config'
import * as dotenv from 'dotenv';
dotenv.config();

export default function connect() {
    mongoose.Promise = Promise;
    try {
        mongoose.connect(process.env.DB_URL);
        console.log("Succefuly connect to DB");
    } catch (error) {
        mongoose.connection.on('error' ,(error:Error) => console.log(error));  
    }
    
}
