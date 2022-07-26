import { Button, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div style={{marginTop: 120, width: '100%'}}>
      <Paper elevation={10} style={{width: 300, margin: 'auto', paddingTop: 15, paddingLeft: 15, paddingRight: 23, paddingBottom: 20}}>
        <Typography style={{margin: 'auto', width: 60, fontSize: 23, marginBottom: 15}}>
          Login
        </Typography>
        <div>
          <div>
            <Typography>Email</Typography>
            <input 
              type="text" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{width: '100%', outline: 'none', border: 'none', borderRadius: 2, height: 30, border: '1px solid #000000', paddingLeft: 5, fontSize: 15}}
              placeholder='example@gmail.com'
            />
          </div>
          <div style={{marginTop: 25}}>
            <Typography>Password</Typography>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{width: '100%', outline: 'none', border: 'none', borderRadius: 2, height: 30, border: '1px solid #000000', paddingLeft: 5, fontSize: 15}}
              placeholder='Enter your password'
            />
          </div>
          <div style={{marginTop: 25}}>
            <Button
              variant='contained'
              style={{boxShadow: 'none', color: '#fff', background: 'rgb(50, 50, 50)', borderRadius: 10, textAlign: 'center', height: 33, width: '100%', marginLeft: 4}}
            >
              Login
            </Button>
          </div>
          <div style={{width: '100%', textAlign: 'center', marginTop: 5}}>
            <Typography style={{fontSize: 15}}>
              Don't have an account? <Link to='/signup' style={{ color: 'inherit'}}>Signup</Link>
            </Typography>
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default LoginPage