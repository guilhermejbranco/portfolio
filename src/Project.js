import React from 'react';
import './Project.css'

class Project extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      live: false
    };
  }

  componentDidMount(){

    fetch(this.props.parentProps.link)
          .then(
            (result) => {
              this.setState({
                live: true,
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                error
              });
            }
          )
  }

  render() {
    return (

          <div className="col-md-4 mt-5 mb-5">
          <h4 className="text-center font-weight-bold">
            <a href={this.props.parentProps.link} target="_blank" rel="noopener noreferrer">
              <span className={`small ${this.state.live ? 'text-success' : 'text-danger'}`}>&#9679; </span>
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
          </div>


    );
  }
}

export default Project;
