import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Button, TextField, Box, Container } from '@mui/material';
import '../App.css';

const Home: React.FC = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  // used to retrive the details of user stored in Local Storage
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const { name: savedName, mobile: savedMobile, email:savedEmail } = JSON.parse(savedUser);
      setName(savedName);
      setMobile(savedMobile);
      setEmail(savedEmail)
    }
  }, []);

// function to save user details in LocalStorage

  const saveUserDetails  = () => {
    if (!name || !mobile || !email){
        alert("required details")
        return
    }
    const userDetails = {
      name,
      mobile,
      email,
    };
    // console.log(userDetails);
    
    localStorage.setItem('user', JSON.stringify(userDetails));
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <h1 className='heading'>User Details Form</h1>
        <form onSubmit={saveUserDetails}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            required
            fullWidth
            margin="normal"
          />

          <TextField
            label="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            variant="outlined"
            required
            fullWidth
            margin="normal"
            inputProps={{ pattern: '[0-9]{10}' }}
          />
          <TextField 
          label = "Email"
          value = {email}
          type = {email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          required
          fullWidth
          margin="normal" />
          {name && mobile && email ? 
          <Link to ="/Details" >
          <Button type="submit" variant="contained"  
          sx={{mt: 3}} color="primary"
          onClick = {saveUserDetails}>
            Save
          </Button>
          </Link>
          :
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
          }
        </form>
      </Box>
    </Container>
  );
};


export default Home;