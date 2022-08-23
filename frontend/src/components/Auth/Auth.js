import useStyles from './styles';
import React from 'react'
import { Avatar, Container, Paper, TextField, Typography, Grid } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'


const Auth = () => {
  const classes = useStyles();
  const isSignUp = true;
  return (
    <Container component='main' maxWidth='xs'>
      <Paper className="classes.paper" elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
        <form className='classes.form'>
          <Grid container spacing={2}>
            {isSignUp && <>
              <TextField name="fname" Label="First Name" handleChange={()=>{console.log('hello')}} autoFocus xs={6} />
            </>}
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth