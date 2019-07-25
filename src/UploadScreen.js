import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import RaisedButton from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import axios from 'axios';
import { Card, Grid } from '@material-ui/core';
import UploadScreen from './UploadScreen'
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import TableUser from './TableUsers'
import color from '@material-ui/core/colors/cyan';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';




const theme = createMuiTheme({
  palette: {
    primary: color
  },
});

const styles = {
    multi: {
      backgroundColor:'white',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    menu: {
       width: 300,
       height:'1300px',
       backgroundColor: '#F5F5F5'
    },
    table:{
      marginTop:'20%',
      paddingLeft: '15%',
      paddingRight:'0%',
      paddingBottom:'50%',
    },
    card: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
      height: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  };

class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:'',
  hideElement:true,
  }
 }
render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>

          <AppBar position="static">  
            <Toolbar>
              <IconButton  color="default" aria-label="Menu" style={{color: 'white'}}>
                <MenuIcon onClick={(event) => this.handleClick(event)}/>
              </IconButton>
              <Typography variant="title" color="default" style={{color: 'white'}}>
                Application
              </Typography>
            </Toolbar>       
          </AppBar >
        </div>
        <Grid container >
        { this.state.hideElement && <Grid key={0} item>
            <div>
              <div style={styles.menu}>
                <Paper style={styles.menu} >
                  <MenuList>
                    <MenuItem >
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                        Users
                    </MenuItem>
                    <MenuItem >
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                        Contact
                    </MenuItem>
                  </MenuList>
                </Paper>
              </div>
            </div>        
        </Grid> }
          <Grid key={1} item style={styles.table}>
             <TableUser /> 
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
 /* 
     <div style={styles.table}>
          <TableUser />
        </div>
<div>
    <div style={styles.menu}>
      <Paper style={styles.menu} >
        <MenuList>
          <MenuItem >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
              Users
          </MenuItem>
          <MenuItem >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
              Contact
          </MenuItem>
        </MenuList>
      </Paper>
  </div>
  </div>
*/


  handleClick(event){
      this.setState({hideElement: !this.state.hideElement});
      console.log('data', this.state)
    /*var apiBaseUrl = "http://localhost:4000/api/usuarios/";
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
    });*/
  }
}

const style = {
 margin: 15,
};
export default Login;