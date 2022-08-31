import React, {useState} from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import {GoogleLogin} from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import {useDispatch } from 'react-redux';
import {signIn} from '../../actions/auth';
import {useNavigate} from 'react-router-dom';


const SignIn = ({ setSignUp }) => {
    
    const navigate = useNavigate();
    const classes = useStyles();
    const dispatch = useDispatch();

    const [authData,setAuthData]= useState({email:'',email_verified: false, password:'',family_name:'',given_name:'',accountType:'email'})

    const handleSubmit = (e) =>{
        dispatch(signIn(authData,navigate));
    }
    const handleOnChange = (e)=>{
        setAuthData({...authData,[e.target.name]:e.target.value});
    }
    const onSuccess = (res) =>{
        dispatch(signIn({...jwt_decode(res.credential),passowrd:'',accountType:'google'},navigate))
    }
    const onFailure= (error) =>{
        console.log(error);
    }
    /* result
    jwt web token
aud: "927468423265-tfp5a53e37lhi7295eia0nlf7696en6f.apps.googleusercontent.com"  //clientId audience
azp: "927468423265-tfp5a53e37lhi7295eia0nlf7696en6f.apps.googleusercontent.com" //clientId of request reciever
email: "shriprakashshukla8@gmail.com"
email_verified: true
exp: 1661457861 //expiration time
family_name: "Shukla"
given_name: "Shri Prakash"
iat: 1661454261
iss: "https://accounts.google.com"
jti: "212bc88f1643fefe3a9abe171f1499b25aa6df0d"
name: "Shri Prakash Shukla"
nbf: 1661453961
picture: "https://lh3.googleusercontent.com/a-/AFdZucoTG9YR3zjL46-kIj9Aaarb5GIgqeNWue3WX3kS6vg=s96-c"
sub: "115478077047154521531" //subject
    */

    return (
        <Grid>
            <Paper className={classes.paper} elevation={10} >
                <Grid align='center'>
                    <Avatar className={classes.avatar} ><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <div style={{marginLeft:'50px'}}>
                <GoogleLogin
                    onSuccess={onSuccess}
                    onError={onFailure}
                    size='medium'
                />
                </div>
                <TextField label='Username' name="email" value={authData.email} onChange={handleOnChange} fullWidth required />
                <TextField label='Password' name="password" value={authData.password} type='password' onChange={handleOnChange} fullWidth required />

                <Button className={classes.primaryButton} type='submit' color='primary' variant="contained" onClick={handleSubmit}>Sign in</Button>

                <Typography className={classes.secondaryTypo + " " + classes.hover} onClick={() => { console.log('forget password button clicked') }}>Forgot password?</Typography>
                <Typography className={classes.secondaryTypo}>  Have not an account yet?
                    <Button className={classes.secondaryButton} onClick={() => setSignUp(true)}>
                        Sign Up
                    </Button>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default SignIn

/*
clientId: "927468423265-tfp5a53e37lhi7295eia0nlf7696en6f.apps.googleusercontent.com"
credential: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQwMmYzMDViNzA1ODEzMjlmZjI4OWI1YjNhNjcyODM4MDZlY2E4OTMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2NjE0NDg4NTcsImF1ZCI6IjkyNzQ2ODQyMzI2NS10ZnA1YTUzZTM3bGhpNzI5NWVpYTBubGY3Njk2ZW42Zi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExNTQ3ODA3NzA0NzE1NDUyMTUzMSIsImVtYWlsIjoic2hyaXByYWthc2hzaHVrbGE4QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiI5Mjc0Njg0MjMyNjUtdGZwNWE1M2UzN2xoaTcyOTVlaWEwbmxmNzY5NmVuNmYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJuYW1lIjoiU2hyaSBQcmFrYXNoIFNodWtsYSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb2
0vYS0vQUZkWnVjb1RHOVlSM3pqTDQ2LWtJajlBYWFyYjVHSWdxZU5XdWUzV1gza1M2dmc9czk2LWMiLC
JnaXZlbl9uYW1lIjoiU2hyaSBQcmFrYXNoIiwiZmFtaWx5X25hbWUiOiJTaHVrbGEiLCJpYXQiOjE2Nj
E0NDkxNTcsImV4cCI6MTY2MTQ1Mjc1NywianRpIjoiMThjYjU4ZDM0NDhhYmI5Yjk1ZGY2NTYxY2JmY2Y2
NjZjYzkxMmUzZiJ9.GUh-6vOkjXQpVK4zC6fI6-VVARPrnfSFm6aHhuPMeYq4rZem6HMCKiGsSYi0hQho
Pou2Bhx2UMGrd1_w32raHoHUKiPkQf-n9M6vv6wnWbpBU3o5C1iVXIGXLCxxzqmKEqbb_pcnohVUdxLDb
_309C57_itlQzaHQjxMYeGOYMNXYk2RxhAE0YRzMJ_JScteghZbhAoPjpazDiyuiQ4CLvIvVRjp9Lyrlu
yALvFPJN465eBJsamwAk0KIbXBa1LqQcqh36mQ3tUlnhUnAwkmfZ6kO1RhNGpNOwWdxsOtNpUzT2C5P9Tw
WMDybxSJJIzVPEqa48fKLfIn4nuRYGmezA"
select_by: "btn"

*/