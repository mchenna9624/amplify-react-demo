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

export const useStyles = makeStyles((theme) => ({
	  paper: {
		    marginTop: theme.spacing(8),
		    display: 'flex',
		    flexDirection: 'column',
		    alignItems: 'center',
		  },
		  avatar: {
		    margin: theme.spacing(1),
		    backgroundColor: theme.palette.secondary.main,
		  },
		  form: {
		    width: '100%', // Fix IE 11 issue.
		    marginTop: theme.spacing(1),
		  },
		  submit: {
		    margin: theme.spacing(3, 0, 2),
		  },
		}));

function LoginButton(props) {
	  return (
	    <button onClick={props.onClick}>
	      Login
	    </button>
	  );
	}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function Greeting(props) {
	  const isLoggedIn = props.isLoggedIn;
	  if (isLoggedIn) {
	    return <UserGreeting />;
	  }
	  return <GuestGreeting />;
	}

function UserGreeting(props) {
	  return <h1>Welcome back!</h1>;
	}

	function GuestGreeting(props) {
	  return <h1>Please sign up.</h1>;
	}
	
	function Copyright() {
		  return (
		    <Typography variant="body2" color="textSecondary" align="center">
		      {'Powered By '}
		      <Link color="inherit" href="http://www.glawen.com/" className="company" target="_blank">
		        Glawen Technologies
		      </Link>
		    </Typography>
		  );
		}	

export {LoginButton, LogoutButton, Greeting, UserGreeting, GuestGreeting, Copyright }