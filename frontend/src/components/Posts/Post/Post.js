import React from 'react';
import useStyles from './Styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { likePost, deletePost } from '../../../actions/posts';
import { useSelector } from 'react-redux';

const Post = ({ post, setCid }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.auth);

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creatorName}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      {currentUser?._id === post.creatorId && (
        <div className={classes.overlay2}>
          <Button style={{ color: 'white' }} size="small" onClick={() => setCid(post._id)} ><MoreHorizIcon fontSize="default" /></Button>
        </div>
      )}
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => currentUser && dispatch(likePost(post._id, currentUser?._id))} ><ThumbUpAltIcon fontSize="small" /> &nbsp; Like &nbsp; {post.likes.length}</Button>

        {currentUser?._id === post.creatorId && (
          <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
        )}

      </CardActions>
    </Card>
  )
}

export default Post;