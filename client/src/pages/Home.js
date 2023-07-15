import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>
        <div>This is Home</div>
        
        <Button component={Link} to="/test" variant="contained" color="secondary">To Test</Button>
        

        <Button variant="outlined">BUTTON</Button>
        </>
    )
}

export default Home;