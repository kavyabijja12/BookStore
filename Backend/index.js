import express, { request, response } from "express";
import { PORT, MongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import router from "./routes/booksRoute.js";
import cors from "cors";

const app = express();
// Like Middleware to parse request body in json
app.use(express.json())

// Like a Middleware to handle CORS POLICY
// Option 1: Allow all Origins with default values of Cors(*)
app.use(cors())
// Option 2: Allow Custom Origins
// app.use(cors({
//     origin: 'http://localhost:5173/',
//     methods: ['GET','POST','PUT',"DELETE"],
//     allowedHeaders: ['Content-Type']
// }))

app.get('/',(request,response)=>{
    console.log("MERN STACK");
    return response.status(245).send("Message with Http");
})
// To access all the routes 
app.use('/books',router);

// Connect to MongoDB database
mongoose
    .connect(MongoDBURL)
    .then(()=>{
        console.log("app successfully connected to MongoDB database");
        app.listen(PORT,()=>{
            console.log(`Listening to PORT : ${PORT}`);
        })
    })
    .catch((error)=>{
        console.error("ALERT ERROR !!" ,error);
    })


