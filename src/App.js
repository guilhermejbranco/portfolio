import React from 'react';
import './App.scss'
import Console from './Console'
import Login from './Login'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      logged: false
    };
  }

  callbackFunction = (childData) => {
    this.setState({hide: childData})
  }

  loginFunction = (childData) => {
    this.setState({logged: childData})
    this.setState({hide: false})
  }

  render() {
    return (
      <span>
        {
      !this.state.hide && this.state.logged &&
    
      <div className="intro ml-4 mr-4 mt-4">
        <h1>
      
        hello.
        <br/><br/>
        My name is <span className="highlight">Guilherme Branco</span> and this is my console. Move it around, interact with it and find out more about me.
        </h1>
        <div className="consoleOutboud mt-4">
        

        </div>
        
      </div>
      }
              {
      this.state.logged &&
      <Console parentCallback = {this.callbackFunction} logoutCallback = {this.loginFunction}/>}
      {
      !this.state.logged &&
      <Login parentCallback = {this.loginFunction}/>}
      </span>
    );
  }
}

export default App;
