import React from 'react';
import './Console.css'
import About from './About'
import Portfolio from './Portfolio'
import Draggable from 'react-draggable';
import Typist from 'react-typist';

class Console extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleString(),
      rows: 1,
      appendedCompsCount:1,
      appendedComponents: [],
      showAbout: false,
      showPortfolio: false,
      minimze: '',
      opacity:''
    };
    this.textInput = React.createRef();
    this.console = React.createRef();
  }



  _handleKeyDown = (e) => {
   if (e.key === 'Enter') {

     this.setState({
       value: this.state.value + this.state.defaultprefix,
       rows: this.state.rows + 2,
       appendedCompsCount: this.state.appendedCompsCount + 1
     });

     var command = this.textInput.current.value

     switch(command){
       case "clear":
        this.console.current.innerHTML = ''
        break;
        case "clean":
         this.setState({showAbout: false, showPortfolio: false})
         this.props.parentCallback(false);
         break;
       case "about":
       this.setState({showAbout: true, showPortfolio: false})
       this.props.parentCallback(true);
        break;
        case "portfolio":
        this.setState({showAbout:false, showPortfolio: true})
        this.props.parentCallback(true);
         break;
      default:
         var error = document.createElement('span'); // is a node
         error.innerHTML = "-bash: " + this.textInput.current.value + ": command not found";
         this.console.current.appendChild(error);
         break;
     }

   }
  }

  componentDidUpdate(){
    if(!this.state.minimize){
    this.textInput.current.focus();
  }
  }

  getAppendedComponents(){
    let appendedComponents = [];
    for (let i = 0; i < this.state.appendedCompsCount; i++) {
      document.activeElement.blur();

      appendedComponents.push(
       <div key={i}>
        <span>Guilhermes-MBP:~ guilhermejbranco$</span>
        <input
        id={"input" + i}
        type="text"
        className="just-name console-input pl-2"
        onKeyDown={this._handleKeyDown}
        ref={i === this.state.appendedCompsCount - 1 ? this.textInput : null}
        />
       </div>
      )
    }
    return appendedComponents;
  }

  handleLeave = () => {
    if(this.state.showAbout || this.state.showPortfolio){
      this.setState({opacity:'opacity'})
    }
    else{
      this.setState({opacity:''})
    }
  }

  minimizeConsole = () => {
      this.setState({minimize:'minimize'})
  }

  maximizeConsole = () => {
    this.setState({minimize:''})
}


  eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  render() {
    return (
      <span>

      {this.state.showAbout && <About/> }
      {this.state.showPortfolio && <Portfolio/> }

      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 200, y: 20}}
        position={null}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
        cancel=".just-name"
        >
        <div className={"handle draggable p-0 position-absolute " + this.state.opacity + " " + this.state.minimize }
        onMouseLeave={this.handleLeave}>
          <div className="tab w-100">
            <span className="tab-button text-danger" >&#9679;</span>
            <span className="tab-button text-warning" onClick={this.minimizeConsole}>&#9679;</span>
            <span className="tab-button text-success" onClick={this.maximizeConsole}>&#9679;</span>

          </div>
          
          <div className="p-2 mt-3 pb-3 overflow-auto mh">
          <Typist>
            <span>Last login: {this.state.date} on guilhermejbranco</span> <br/>
          </Typist>
          <div>
          <br/>
          Available Commands: <br/>
          about ----------- Displays an about me page.<br/>
          portfolio -------- Displays my portfolio page.<br/>
          clean ----------- Cleans the screen.<br/>
          clear ------------ Clears the console.<br/>
          <br/>
          </div>
          <div ref={this.console}>
          {
            this.getAppendedComponents()
          }
          </div>
          </div>

        </div>
      </Draggable>

      </span>
    );
  }
}

export default Console;
