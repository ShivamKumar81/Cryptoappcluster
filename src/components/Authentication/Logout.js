import { Box, Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { CryptoState } from '../../CryptoContext';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Logout = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const {setAlert} = CryptoState();

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      setAlert({
        open: true,
        message: "Passwords do not match",
        type: "error",
      });
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(result);
      
      setAlert({
        open: true,
        message: `Sign Up Successful. Welcome ${result.user.email}`,
        type: "success",
      });

      handleClose();
    } 
    catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
      return;
    }
  };


  return (
    <Box padding={3} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <TextField
        variant='outlined'
        type="email"
        label= "Enter Email"
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
        <TextField
        variant='outlined'
        type="Password"
        label= "Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
          <TextField
        variant='outlined'
        type="Password"
        label= "Confirm Password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        size="large"
        style={{ backgroundColor: "gold" }}
        onClick={handleSubmit}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default Logout;