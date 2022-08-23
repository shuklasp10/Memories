
import * as api from '../api/posts';

export const getPosts = () => async (dispatch) => {
  const {data} = await api.fetchPosts();
  const action = {
    type:"GET_POSTS",
    payload: data
  };
  dispatch(action);
}

export const postPost = (post) => async (dispatch) =>{
  const {data} = await api.postPosts(post);
  const action = {
    type:"CREATE",
    payload:data
  }
  dispatch(action);
}

export const likePost = (id) => async(dispatch) => {
  const {data} = await api.likePost(id);
  const action = {
    type:"UPDATE",
    payload:data
  }
  dispatch(action);
} 

export const deletePost = (id) => async(dispatch) =>{
  const {data} = await api.deletePost(id);
  const action={
    type:'DELETE',
    payload:data
  }
  dispatch(action);
}

export const updatePost = (id,post) => async(dispatch) =>{
  console.log(post);
  const {data} = await api.updatePost(id,post);
  console.log(data);
  const action = {
    type:"UPDATE",
    payload:data
  }
  dispatch(action);
}
