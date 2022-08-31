import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import cors from  "cors";
import postRouter from './routes/posts.js';
import dotenv from 'dotenv';
import authRouter from './routes/auth.js';

//creating server
const app = express();
dotenv.config();

//bodyparsers extract all incoming http requests and parse json, string, buffer and url encoded data
//and exposes to req.body
app.use(bodyparser.json({limit:"30mb", extended:true}));
app.use(bodyparser.urlencoded({limit:"30mb", extended:true}));

//cors used to skip same origin policy and access resources from remote hosts.
app.use(cors());
//routing all requests to router
app.use("/posts",postRouter);
app.use('/user',authRouter);


const PORT = process.env.PORT || 5000;

//connecting to database => making server listen to defined port and handling any error.
mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
        .then(()=>app.listen(PORT,()=>console.log(`server running on port ${PORT}`)))
        .catch((error)=>console.log(error.message));
