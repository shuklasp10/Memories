import React, { useEffect, useState } from  'react';
import {useDispatch, useSelector} from 'react-redux';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { postPost, updatePost } from '../../actions/posts';
import useStyles from './Styles';

const Form = ({cid,setCid}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({creator:"", title:"", message:"", tags:'', selectedFile: ''});
  const post = useSelector((state)=>state.posts.find(post=>post._id===cid));

  useEffect(()=>{
    if(post) setPostData(post);
  },[post]);
  
  const clear = () =>{
    setPostData({creator:"", title:"", message:"", tags:'', selectedFile: ''});
    setCid(null);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(cid){
      dispatch(updatePost(cid,postData));
    }
    else{
      dispatch(postPost(postData));
    }
    clear();
  }

  return (
    <Paper className={classes.paper}>
    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
      <Typography variant="h6">{`${cid?'Editing':'Creating'} a Memory`}</Typography>
      <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
      <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
      <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
      <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
      <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
      <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
      <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
    </form>
  </Paper>
  )
}

export default Form