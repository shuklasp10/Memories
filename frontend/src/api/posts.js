import axios from 'axios';

const URL = "http://localhost:5000/posts";

export const fetchPosts = () =>(
    axios.get(URL)
);

export const postPosts = (post) =>(
    axios.post(URL,post)
);

export const likePost = (id) =>(
    axios.patch(URL+`/${id}/like`)
)

export const deletePost = (id) =>(
    axios.delete(URL+`/${id}`)
)

export const updatePost = (id,post) =>(
    axios.patch(URL+`/${id}`,post)
)