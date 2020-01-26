import React from 'react';
import './App.scss'
import Console from './Console'
import Login from './Login'
import Fade from "./Fade";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      logged: false,
      showLogin: true
    };
  }

  callbackFunction = (childData) => {
    this.setState({hide: childData})
  }

  loginFunction = (childData) => {
    this.setState({logged: childData})
    if(childData){
      this.setState({showLogin: false})
      this.setState({hide: false})
    }
    else{
      this.setState({showLogin: true})
      this.setState({hide: true})

    }
  }

  render() {
    return (
      <span>
       
      <Fade show={!this.state.hide && this.state.logged}>
      <div className="intro ml-4 mr-4 mt-4">
        
        <h1>
      
        Hello.
        <br/><br/>
        My name is <span className="highlight">Guilherme Branco</span> and this is my console. Move it around, interact with it and find out more about me.
        </h1>
        
      </div>
      </Fade>
      
      
      <Fade show={this.state.logged}>
      <Console parentCallback = {this.callbackFunction} logoutCallback = {this.loginFunction}/>
      </Fade>
      
      
      <Fade show={this.state.showLogin}>
        <Login parentCallback = {this.loginFunction}/>
      </Fade>
      
      </span>
    );
  }
}

export default App;
