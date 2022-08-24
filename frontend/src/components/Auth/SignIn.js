import React, {useState} from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';


const SignIn = ({ setSignUp }) => {
    const classes = useStyles();
    const [data,setData] = useState({uname:'',password:''});

    const handleSubmit = (e) =>{
        console.log(data);
    }

    return (
        <Grid>
            <Paper className={classes.paper} elevation={10} >
                <Grid align='center'>
                    <Avatar className={classes.avatar} ><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' value={data.uname} onChange={e=>setData({...data,uname:e.target.value})} fullWidth required />
                <TextField label='Password' value={data.password} type='password' onChange={e=>setData({...data,password:e.target.value})} fullWidth required />

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