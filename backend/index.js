import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import cors from  "cors";
import postRouter from './routes/posts.js';
import dotenv from 'dotenv';
import authRouter from './routes/auth.js';

const app = express();
dotenv.config();

app.use(bodyparser.json({limit:"30mb", extended:true}));
app.use(bodyparser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

app.use("/posts",postRouter);
app.use('/user',authRouter);


const PORT = process.env.PORT;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
        .then(()=>app.listen(PORT,()=>console.log(`server running on port ${PORT}`)))
        .catch((error)=>console.log(error.message));
