import React from 'react';
import './Project.scss';

import ImageContentHover from './ImageContentHover';

class Project extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isloading: true,
      techStack: []
    };

  }

  callbackFunction = (childData) => {
    
    this.setState({isloading: childData})
  }

  getTech(){
    const items = [];
    this.state.techStack
      .forEach(item => items.push(
                        
                         <span className="badge badge-secondary ml-2 mr-2 mt-2">
                            {item}
                         </span>
                       ))
    return(
      <h5 className="">
        {items} <br></br>
        <a className="btn btn-light mt-4" href={this.props.parentProps.link} target="_blank" rel="noopener noreferrer">Visit Website</a>
      </h5>
   );
  }

  componentDidMount(){
      this.setState({techStack: this.props.parentProps.techStack.split(", ")}) 
      
  }

  render() {
    return (

    <div className="col-md-4 mt-2 text-center project">

        <span className="text-left">
          <h5 className="text-center font-weight-bold">
            <a href={this.props.parentProps.link} target="_blank" rel="noopener noreferrer">
              {this.props.parentProps.title} . 
              <span className="small ml-2">
                 {this.props.parentProps.year}
              </span>
            </a>
          </h5>
          {this.props.parentProps.img &&
          <ImageContentHover 
          className="w-100 h-50 shadow minheight"
          tileWidth="100%"
          tileHeight="100%" 
          image={require('./img/portfolio/'+ this.props.parentProps.img +'.png')}
          content={{
            body: this.getTech()
          }} 
          parentCallback = {this.callbackFunction}
          effect="fadeIn" />}
          <hr></hr>
          <p className="mt-1">{this.props.parentProps.description}
          
          { !this.props.parentProps.img &&
          <span>
            <br></br><br></br>
          <span className="font-weight-bold">Tech Stack | </span>
          {
            this.props.parentProps.techStack
          }
          </span>
          }
          </p>
          </span>
          </div>


    );
  }
}

export default Project;
