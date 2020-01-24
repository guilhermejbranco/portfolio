import React from 'react';
import './Project.css';
import Loader from 'react-loader-spinner'

class Project extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isloading: true
    };

  }

  componentDidMount(){
      this.setState({isloading: false}) 
  }

  render() {
    return (

          <div className="col-md-4 mt-5 mb-5 text-center">
           {this.state.isloading && <Loader
         type="TailSpin"
         color="lightgreen"
         height={100}
         width={100}
         

      /> }
        { !this.state.isloading && <span className="text-left">
          <h4 className="text-center font-weight-bold">
            <a href={this.props.parentProps.link} target="_blank" rel="noopener noreferrer">
              {this.props.parentProps.title}
              <span className="small ml-2">
                 {this.props.parentProps.year}
              </span>
            </a>
          </h4>
          {this.props.parentProps.img &&<img src={require('./img/portfolio/'+ this.props.parentProps.img +'.png')} className="w-100 h-50 obj-fit"/>}
          <p className="mt-1">{this.props.parentProps.description}<br/>
          <span className="font-weight-bold tag mr-2 mt-3">Team Size</span>{this.props.parentProps.teamSize} <br/>
          <span className="font-weight-bold tag mr-2">Company</span>{this.props.parentProps.company}<br/>
          <span className="font-weight-bold tag mr-2">Tech Stack</span>
          {this.props.parentProps.techStack}
          </p>
          </span>}
          </div>


    );
  }
}

export default Project;
