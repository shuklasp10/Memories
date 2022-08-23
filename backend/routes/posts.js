import express from "express";
import { getPosts, createPost, likePost, deletePost, updatePost } from "../controller/posts.js";

//change to const router if not work
const router = express.Router();

router.get('/',getPosts);
router.post('/',createPost);
router.patch('/:id/like',likePost);
router.delete('/:id',deletePost);
router.patch('/:id',updatePost);

export default router;