import mongoose from "mongoose";
import PostMessage from "../model/postMessage.js";

export const getPosts = async (req,res)=>{
    try{
        const PostMessages = await PostMessage.find();
        res.status(200).json(PostMessages);
    }
    catch (e){
        res.status(404).json({error:e.message});
    }
}

export const createPost = async (req,res)=>{
    const post = req.body;
    const postMessage = new PostMessage(post);
    try{
        await postMessage.save();
        res.status(201).json(postMessage);
    }
    catch(e){
        res.status(409).json({error:e.message});
    }
}

export const likePost = (req,res)=>{
    try{
        const {id} = req.params;
        if (mongoose.Types.ObjectId.isValid(id)) return res.status(400).send({error:'Id is not valid'});
        PostMessage.findByIdAndUpdate(id,{$inc:{likeCount:1}},{new:true},(err,doc)=>{
            if(!err){
                res.status(200).send(doc);
            }
            else{
                res.status(401).json({err:err.message});
            }
        })
    }
    catch(e){
        console.log(e.message);
    }
}

export const deletePost = (req,res)=>{
    const {id} = req.params.id;
    if (mongoose.Types.ObjectId.isValid(id)) return res.status(400).send({error:'invalid id'});
    PostMessage.findByIdAndDelete(req.params.id,(err,doc)=>{
        if(!err){
            res.status(200).send(doc);
        }
        else{
            res.status(500).send({error:err.message});
        }
    });
}

export const updatePost = (req,res) =>{
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send();

    PostMessage.findByIdAndUpdate(id,req.body,{new:true},(err,doc)=>{
        if(!err){
            res.status(200).send(doc);
        }
        else{
            res.status(400).send(err.message);
        }
    });
}