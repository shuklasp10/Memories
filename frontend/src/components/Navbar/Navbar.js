import React from 'react';
import useStyles from './NavbarStyles';
import memories from '../../images/memories.png';
import {AppBar, Avatar, Button, Toolbar, Typography} from '@material-ui/core';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const classes = useStyles();
    const user = null;
  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
        <div className={classes.brandContainer}>
        <Typography component={Link} to='/' className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
        </div>
        <Toolbar className={classes.toolbar}>
            {user?
            <div className={classes.profile}>
                <Avatar className={classes.purple} alt={user.result.name} src= {user.result.name.charAt(0)} />
                <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                <Button variant='contained' className={classes.logout} color='secondary' >Log Out</Button>
            </div>:
            <div>
                <Button component={Link} to='/auth' variant='contained' color='primary'>Sign In</Button>
            </div>
                }
        </Toolbar>
      </AppBar>
  )
}

export default Navbar