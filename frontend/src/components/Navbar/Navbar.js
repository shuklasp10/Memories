import React, { useState } from 'react';
import useStyles from './NavbarStyles';
import memories from '../../images/memories.png';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth);
    const [searchTag,setSearchTag] = useState();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
    }

    return (
        <AppBar className={classes.appBar} position='static' color='inherit'>
            { /* right side of nav */}
            <div className={classes.brandContainer}>
                <Typography component={Link} to='/' className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="icon" height="60" />
            </div>
            { /* left side of nav */}
            <Toolbar className={classes.toolbar}>
                <div>
                    <input placeholder='input tags' component='Link' to={`/posts/${searchTag}`} value = {searchTag} onChange={(e)=>setSearchTag(e.target.value)}/>
                    <Button component={Link} to={`/posts/${searchTag}`} variant='contained' color='primary'>Search</Button>
                </div>
                {user ? <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user.given_name} src={user.picture} />
                            <Typography className={classes.userName} variant='h6'>{user.given_name}</Typography>
                            <Button variant='contained' className={classes.logout} color='secondary' onClick={logout} >Log Out</Button>
                        </div>
                    : <div>
                        <Button component={Link} to='/auth' variant='contained' color='primary'>Sign In</Button>
                      </div>
                }
            </Toolbar>

        </AppBar>
    )
}

export default Navbar