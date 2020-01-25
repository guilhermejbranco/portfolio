import React from 'react';
import './App.scss'
import Console from './Console'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hide: false
    };
  }

  callbackFunction = (childData) => {
    this.setState({hide: childData})
  }

  render() {
    return (
      <span>
        {
      !this.state.hide &&
    
      <div className="intro container mt-4">
        <h1>
      
        hello.
        <br/><br/>
        My name is <span className="highlight">Guilherme Branco</span> and this is my console. Move it around, interact with it and find out more about me.
        </h1>
        
      </div>
      }
      <Console parentCallback = {this.callbackFunction}/>
      </span>
    );
  }
}

export default App;
