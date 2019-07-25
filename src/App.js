import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';
import Loginscreen from './Loginscreen'

const styles={
  app:{
    backgroundColor:'#84FFFF',
  },
  media:{
    }
}

injectTapEventPlugin();

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<Loginscreen parentContext={this} key={Math.random()}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <div className="App" style={styles.app}>
       <div style={styles.media}> 
       {this.state.loginPage}
        {this.state.uploadScreen}
       </div>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default App;