import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
//import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { apiClient } from '../../../shared/services/api-client';
import { Link } from 'react-router-dom';

export const Register= () => {
  const emailRef= useRef()
  const pwdRef= useRef()
  const nameRef= useRef()
  const phoneRef= useRef()

  const [message, setMessage]= useState('')

  const doRegister= async ()  =>{
    const userInfo= {
      'email': emailRef.current.value,
      'password': pwdRef.current.value,
      'name': nameRef.current.value,
      'phone': phoneRef.current.value,
    }
    try{
    const response= await apiClient.post(process.env.REACT_APP_REGISTER_URL,userInfo)
    setMessage(response.message)
    console.log('Response is ', response)
    console.log('User Info ', userInfo)
    }
    catch(err){
      setMessage('Register Fail..')
      console.log('Error is ', err)
    }
  }

  return (
    <Grid container spacing={2} direction="column">
    <Grid item mt={2}>
    <p>{message}</p>
      <TextField inputRef={emailRef} label="Email" variant="outlined" />
    </Grid>
    <Grid item>
      <TextField inputRef={pwdRef} type="password" label="Password" variant="outlined" />
    </Grid>
    <Grid item>
      <TextField inputRef={nameRef} label="Name" variant="outlined" />
    </Grid>
    <Grid item>
      <TextField inputRef={phoneRef} label="Phone" variant="outlined" />
    </Grid>
    <Grid item>
      <Button onClick={doRegister} variant="contained">Register Yourself</Button>
    </Grid>
    <p>If already registered? <Link to="/login">Login</Link></p>
  </Grid>
  )
}