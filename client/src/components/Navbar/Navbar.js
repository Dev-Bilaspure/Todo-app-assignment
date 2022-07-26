import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LogoutIcon from '@mui/icons-material/Logout';
import './navbarStyles.css'

import { Avatar, Menu, MenuItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';



const Navbar = () => {
  // const classes = useStyle();
  const user = false;

  return (
    <div>
      <AppBar position="fixed" style={{boxShadow: 'none', borderBottom: '1px solid #000000', background: '#fff'}}>
        <Toolbar>
          <div style={{display: 'flex', width: '100%'}}>
            <div>
              <Typography style={{fontFamily: `'Abril Fatface', 'cursive'`, color: '#000000', fontSize: 28, marginLeft: 30}}>
                <Link to='/' style={{color: 'inherit', textDecoration: 'none'}}>
                  Todo App Demo
                </Link>
              </Typography>
            </div>
            {
              !user ? 
              <div style={{marginLeft: 'auto', marginRight: 0, display: 'flex', paddingTop: 8}}>
                <Typography style={{color: '#000000', fontSize: 17, marginRight: 40}}>
                  <Link to='/login' style={{color: 'inherit', textDecoration: 'none'}}>
                    Login
                  </Link>
                </Typography>
                <Typography style={{color: '#000000', fontSize: 17, marginRight: 40}}>
                  <Link to='/signup' style={{color: 'inherit', textDecoration: 'none'}}>
                    Signup
                  </Link>
                </Typography>
              </div> :
              <div style={{marginLeft: 'auto', marginRight: 0, paddingTop: 2, marginRight: 40}}>
                <BasicMenu />
              </div>
            }
            
          </div>
          
        </Toolbar>
      </AppBar>
    </div>
  )
}

const BasicMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }
  const open = Boolean(anchorEl);
  const handleLogout = () => {
    console.log("logout ");
  }
  return(
    <div>
      <Avatar 
        alt="user image" 
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
        onClick={handleClick}
        className='basicMenuAvatar'
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        // MenuListProps={{
        //   'aria-labelledby': 'basic-button',
        // }}
        style={{marginTop: 6}}
      >
        <MenuItem style={{paddingLeft: 25, paddingRight: 20}} onClick={handleLogout}>
          <Typography style={{color: '#000000', paddingRight: 10}}>
            Logout
          </Typography>
          <LogoutIcon style={{color: 'rgb(123,123,123)', float: 'right', paddingLeft: 0}}/>
        </MenuItem>
      </Menu>
    </div>
  )
}
export default Navbar