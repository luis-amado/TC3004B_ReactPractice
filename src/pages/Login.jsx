import { Box, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ login }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onsubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert('Please enter your username and password');
      return;
    }
    const isLogin = await login({ username, password });
    if (isLogin) {
      setUsername('');
      setPassword('');
      navigate('/home');
    } else {
      alert('Login Unsuccessful');
    }
  };

  return (
    <form onSubmit={onsubmit}>
      <Box
        margin='auto'
        flexDirection='column'
        display='flex'
        width='400px'
        marginTop='20px'
        gap='10px'
      >
        <h1>Login</h1>
        <TextField
          label='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          type='password'
          label='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type='submit' variant='contained'>
          Login
        </Button>
      </Box>
    </form>
  );
};

export default Login;
