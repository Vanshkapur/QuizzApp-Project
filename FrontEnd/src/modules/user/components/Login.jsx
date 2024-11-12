import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
//import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { apiClient } from '../../../shared/services/api-client';

export const Login = () => {
  const emailRef= useRef()
  const pwdRef= useRef()
  const [message, setMessage]= useState('')

  const doLogin= async ()=>{
    const userInfo= {
      'email': emailRef.current.value,
      'password': pwdRef.current.value,
    }
    try{
      const response = await apiClient.post(process.env.REACT_APP_LOGIN_URL,userInfo);
      console.log(response);
      setMessage(response.message)
      console.log(response)
      }
      catch(err){
        setMessage('Login Fail..')
        console.log('Error in login', err)
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
        <Button onClick={doLogin} variant="contained">Login</Button>
      </Grid>
    </Grid>
  )
}