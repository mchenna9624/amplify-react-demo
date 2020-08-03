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
import {LoginButton, LogoutButton, Greeting, UserGreeting, GuestGreeting} from './buttons';
import {Welcome} from './welcome';
import LoginComponent from './LoginComponent';
import SignupComponent from './SignupComponent';

import Amplify, { Auth } from 'aws-amplify';


export default class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.showSignUp = this.showSignUp.bind(this);
    this.showLogin = this.showLogin.bind(this);
    this.showForgot = this.showForgot.bind(this);
    this.state = {welcome: false, isLoggedIn: true, isSignUp: false, username: "", password: "", firstName: "", lastName: "", email: "", usernamesignup: "", isSubmitted: false};
  }

  showSignUp(){
	  this.setState({welcome: false, isLoggedIn: false, isSignUp: true, isSubmitted: false, username: "", password: "", firstName: "", lastName: "", email: "", usernamesignup: "" });
  }
  
  showLogin(){
	  this.setState({welcome: false, isLoggedIn: true, isSignUp: false, isSubmitted: false, username: "", password: "", firstName: "", lastName: "", email: "", usernamesignup: ""});
  }
  
  showWelcome(firstname, lastname){
	  this.setState({welcome: true, isLoggedIn: false, isSignUp: false, username: "", password: "", firstName: firstname, lastName: lastname, email: "", usernamesignup: "", isSubmitted: false});
  }
  
  showForgot(){
	  console.log('forgot');
  }
  
  signInUser(childData){
	  let username = this.state.username.trim();
	  let password = this.state.password.trim();
	  this.setState({isSubmitted: true});	  
	  if("" != username && "" != password){
		  this.signIn(username, password);
	  }
  }
  
  signUpUser(event){
	  this.setState({isSubmitted: true});
	  let firstName = this.state.firstName;
	  let lastName = this.state.lastName;
	  let userName = this.state.usernamesignup;
	  let email = this.state.email;
	  let password = this.state.password;
      if("" != firstName && "" != lastName && "" != userName && "" != email && "" != password) {
    	  this.signUp(userName, password, email, firstName, lastName);
      }
  }
  
  async signIn(username, password) {
	    try {
	        const user = await Auth.signIn(username, password);
	        console.log(user);
	        this.showWelcome(user.attributes["custom:firstname"], user.attributes["custom:lastname"]);
	    } catch (error) {
	        console.log('error signing in', error);
	        alert(error.message);
	    }
	}  
  
  async signUp(username, password, email, firstname, lastname) {
	    try {
	        const user = await Auth.signUp({
	            username,
	            password,
	            attributes: {
	                email: email,          
	                "custom:firstname": firstname,
	                "custom:lastname": lastname,

	            }
	        });
	        console.log({ user });
	    } catch (error) {
	        console.log('error signing in', error);
	        alert(error.message);
	    }
	}

  onChange(event) {
	  console.log("one change");
	  let field = event.target.name;
	  let value = event.target.value;
	  if(event.target.value == ""){

	  }
      this.setState({[field]: value});
      this.setState({firstNameError: true})
  }  
  

  
  async logoutuserClick(event) {
	    try {
	        await Auth.signOut();
	        this.showLogin();
	    } catch (error) {
	        console.log('error signing out: ', error);
	        alert(error.message);
	    }
	}
  
  
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const isSignUp = this.state.isSignUp;
    const isWelcome = this.state.welcome;
    
    let renderedElement;
    if (isLoggedIn) {
    	renderedElement = <LoginComponent onClick={this.showSignUp} onForgot={this.showForgot} onClickSignIn={this.signInUser.bind(this)} loginData={this.state} onChange={this.onChange.bind(this)}/>;
    }else if (isSignUp) {
    	renderedElement = <SignupComponent onClick={this.showLogin} onClickSignUp={this.signUpUser.bind(this)} signUpData={this.state}  onChange={this.onChange.bind(this)}/>;
    }else if(isWelcome){
    	renderedElement = <Welcome logoutuserClick={this.logoutuserClick.bind(this)} welcomeData={this.state}  />;
    } 

    return (
      <div>
        {renderedElement}
      </div>
    );
  }
}