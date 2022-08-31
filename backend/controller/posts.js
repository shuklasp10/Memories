import mongoose from "mongoose";
import PostMessage from "../model/postMessage.js";

export const getPosts = async (req, res) => {
    try {
        const PostMessages = await PostMessage.find();

        res.status(200).json(PostMessages);
    }
    catch (e) {
        res.status(404).json({ error: e.message });
    }
}

export const createPost = async (req, res) => {
    try {
        const post = req.body;

        const postMessage = new PostMessage({ ...post, createdAt: new Date() });

        await postMessage.save();

        res.status(201).json(postMessage);
    }
    catch (e) {
        res.status(409).json({ error: e.message });
    }
}

export const likePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { uid } = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send({ error: 'Id is not valid' });

        const post = await PostMessage.findOne({ _id: id });

        if (!post) return res.status(404).send({ error: 'post not found' });

        const index = await post.likes.findIndex(likeId => likeId === uid);

        post.likes = (index === -1) ? [...post.likes, uid] : post.likes.filter(likeId => likeId !== uid);

        const newPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });

        return res.status(200).send(newPost);
    }
    catch (e) {
        res.status(400).send({ error: 'something went wrong' });
    }
}

export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(402).send({ error: 'invalid id' });

        const post = await PostMessage.findByIdAndDelete(req.params.id);

        if (!post) return res.status(404).send({ error: 'post not found!' });

        return res.status(200).send(post);
    }
    catch (e) {
        res.status(400).send({ error: 'something went wrong!' });
    }


}

export const updatePost = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send();

        const post = await PostMessage.findByIdAndUpdate(id, req.body, { new: true });

        return res.status(200).send(post);
    }
    catch (e) {
        res.status(400).send({ error: 'something went wrong' });
    }
}