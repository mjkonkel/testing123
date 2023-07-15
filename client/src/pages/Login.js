import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
        <div>This is Login</div>
        
        <Button component={Link} to="/home" variant="contained" color="secondary">To Home</Button>
        

        <Button variant="outlined">BUTTON</Button>
        </>
    )
}

export default Login;