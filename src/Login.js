import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import axios from 'axios';
import { Card } from '@material-ui/core';
import UploadScreen from './UploadScreen'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import color from '@material-ui/core/colors/cyan';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';


const theme = createMuiTheme({
    palette: {
      primary: color,
    },
  });

const styles = {
    card: {
     paddingTop:'5%',
      paddingLeft:'30%',
      backgroundColor:'#F5F5F5',
      paddingRight:'30%',
      paddingBottom:'1%'
    },
    media: {
        height:'100%',
        width:'100%',
        paddingTop:'300px',
        backgroundColor:'#84FFFF'
    },
    top:{
        marginTop:'0px',
        marginLeft:'0%',
        marginRigth:'30%',
        width:'730px'
    },
    provider:{
        
    }, 
  };

class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:'',
  showPassword: false,
  }
 }
render() {
    return (
      <div style={styles.media}>
      
        <MuiThemeProvider theme={theme}>
        <div style={styles.card}>
        <Card >
        <AppBar style={styles.top} position="static">  
          <Toolbar>
          <IconButton  color="default" aria-label="Menu" style={{color: 'white'}}>
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="default" style={{color: 'white'}}>
            Login
          </Typography>
        </Toolbar>       
         </AppBar >
            <div>
           <FormControl>
          <InputLabel htmlFor="username-simple">Username</InputLabel>
          <Input id="username-simple" value={this.state.username} onChange={this.handleChange('username')} />
          </FormControl>
          <br/>
           <FormControl>
          <InputLabel htmlFor="adornment-password">Password</InputLabel>
          <Input
            id="adornment-password"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
            onChange={this.handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                  onMouseDown={this.handleMouseDownPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
             <br/>
             <Button variant="raised"color= 'primary' style={style} onClick={(event) => this.handleClick(event)}>Submit</Button>
         </div>
            </Card>
        </div>
         </MuiThemeProvider>
      </div>
    );
  }
  handleClick(event){
      var apiBaseUrl = "http://localhost:4000/api/usuarios/";
    var self = this;
    var payload={
    "value":this.state.username,
    "password":this.state.password
    }
    console.log('base',apiBaseUrl+'authenticate/')
    console.log('aaaa', payload)
    axios.post(apiBaseUrl+'authenticate/', payload)
    .then(function (response) {
    console.log(response);
    if(response.status == 200){
    console.log("Login successfull");
    var uploadScreen=[];
   uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
    self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
    }
    else{
    console.log("Username does not exists");
    alert("Username does not exist");
    }
    })
    .catch(function (error) {
    console.log(error);
    alert("Invalid credential");
    });
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
      };

      handleMouseDownPassword = event => {
        event.preventDefault();
      };
    
      handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
      };
      
}

const style = {
 margin: 15,
 color: 'white'
};
export default Login;