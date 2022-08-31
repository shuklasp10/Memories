import React, { useState } from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import {GoogleLogin} from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import {signUp} from '../../actions/auth';
import {useNavigate} from 'react-router-dom';


const SignUp=({setSignUp})=>{
    const navigate = useNavigate();
    const classes = useStyles();
    const dispatch = useDispatch();
    const [authData,setAuthData]= useState({email:'',email_verified: false, password:'',family_name:'',given_name:'',accountType:'email'})    
    
    const handleSubmit =() =>{
        dispatch(signUp(authData,navigate));
    }
    const handleOnChange = (e)=>{
        setAuthData({...authData,[e.target.name]:e.target.value});
    }
    const onSuccess = (res) =>{
        dispatch(signUp({...jwt_decode(res.credential),password:'',accountType:'google'},navigate));
    }
    const onFailure= (error) =>{
        console.log('error');
        console.log(error);
    }


    return(
        <Grid>
            <Paper className={classes.paper} elevation={10}>
                <Grid align='center'>
                     <Avatar className={classes.avatar} ><LockOutlinedIcon/></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                <div style={{marginLeft:'50px'}}>
                <GoogleLogin
                    onSuccess={onSuccess}
                    onError={onFailure}
                    size='medium'
                    text='signup_with'
                />
                </div>
                <TextField label='First Name' name='given_name' value={authData.given_name} onChange={handleOnChange} style={{width:'45%'}} required/> &nbsp;
                <TextField label='Last Name' name='family_name' value={authData.family_name} onChange={handleOnChange} style={{width:'45%'}} required/>
                <TextField label='E-mail' name='email' value={authData.email} onChange={handleOnChange} type="email" style={{width:'100%'}} required/>
                <TextField label='Password' name='password' value={authData.password} onChange={handleOnChange} placeholder='Enter password' type='password' style={{width:'100%'}} required/>
                
                <Button className={classes.primaryButton} type='submit' color='primary' variant="contained" onClick={handleSubmit}>Sign Up</Button>
               
               
                <Typography className={classes.secondaryTypo}> Already a member?
                     <Button className={classes.secondaryButton} onClick={()=>setSignUp(false)} >
                        Sign In 
                </Button>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default SignUp