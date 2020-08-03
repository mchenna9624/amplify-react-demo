import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Copyright, useStyles } from './buttons';


export default function SignupComponent(props) {
	
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              value={props.signUpData.firstName}
              onChange={props.onChange} 	
              error={props.signUpData.firstName === "" && props.signUpData.isSubmitted === true}
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
              value={props.signUpData.lastName}     
              error={props.signUpData.lastName === "" && props.signUpData.isSubmitted === true}            
              onChange={props.onChange}
            />
          </Grid>
            <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="usernamesignup"
              label="User Name"
              name="usernamesignup"
              value={props.signUpData.usernamesignup}            	  
              autoComplete="usernamesignup"
              error={props.signUpData.usernamesignup === "" && props.signUpData.isSubmitted === true}            	  
              onChange={props.onChange}
            />
          </Grid>            
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={props.signUpData.email}  
              error={props.signUpData.email === "" && props.signUpData.isSubmitted === true}            
              onChange={props.onChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="password"
              error={props.signUpData.password === "" && props.signUpData.isSubmitted === true}            	  
              value={props.signUpData.password}              	  
              onChange={props.onChange}
            />
          </Grid>

        </Grid>
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={props.onClickSignUp}
        >
          Sign Up
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link href="javascript:;" variant="body2" onClick={props.onClick}>
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>      
      
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}