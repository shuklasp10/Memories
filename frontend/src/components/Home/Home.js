import React, {useState, useEffect} from 'react';
import {Container, Grid, Grow } from '@material-ui/core';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import { useSelector } from 'react-redux';

const Home = () => {
    const user = useSelector(state=>state.auth);
    const [cid,setCid] = useState(null);
    const dispatch = useDispatch();
  
    useEffect(()=>{
      dispatch(getPosts());
    },[dispatch]);
  return (
    <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCid={setCid} />
            </Grid>
            {user && (
            <Grid item xs={12} sm={4}>
              <Form cid={cid} setCid={setCid} />
            </Grid>
            )}
          </Grid>
        </Container>
      </Grow>
  )
}

export default Home