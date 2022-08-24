import React, { useState } from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';


const SignUp=({setSignUp})=>{
    const classes = useStyles();
    const [data, setData] = useState({fname:'',lname:'',email:'',password:''});
    
    const handleSubmit =(e) =>{
        console.log(data);
    }

    return(
        <Grid>
            <Paper className={classes.paper} elevation={10}>
                <Grid align='center'>
                     <Avatar className={classes.avatar} ><LockOutlinedIcon/></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                <TextField label='First Name' value={data.fname} onChange={(e)=>setData({...data,fname:e.target.value})} style={{width:'45%'}} required/> &nbsp;
                <TextField label='Last Name' value={data.lname} onChange={(e)=>setData({...data,lname:e.target.value})} style={{width:'45%'}} required/>
                <TextField label='E-mail' value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} type="email" style={{width:'100%'}} required/>
                <TextField label='Password' value={data.password} onChange={(e)=>setData({...data,password:e.target.value})} placeholder='Enter password' type='password' style={{width:'100%'}} required/>
                
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