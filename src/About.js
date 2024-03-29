import React from 'react';
import './About.css'
import Typist from 'react-typist';

class About extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (

        <div className="position-absolute mt-3 pl-5 pr-5 about w-100">
          <h2 className="font-weight-bold text-center">About.</h2>
          <hr/>
          <div className="row">

            <div className="col-md-6">
            <Typist avgTypingDelay={0}>
            <h5>
               I am a 29 yo Full Stack Developer from Lisbon, Portugal. <br/> <br/>
               Bachelor's in Information Systems and Computer Engineering<br/>
               at <a href="https://tecnico.ulisboa.pt/en/" rel="noopener noreferrer" target="_blank">Instituto Superior Técnico</a>.<br/><br/>
               Web Development is my <span className="font-weight-bold text-danger">passion</span>, and I am it.<br/><br/>
               guilhasbranco@gmail.com <br/> +351 918 761 493
             </h5>
             </Typist>
            </div>
            <div className="col-md-6">
              <div className="row">
              <div className="col-md-3"><img src={require('./img/guibitmap.gif')} alt="Guilherme Branco Gif" className="gif"/></div>
              <div className="col-md-9">
              <Typist avgTypingDelay={0}>

                <h5>
                <span class="text-success">Front |</span><span className="font-weight-bold"> HTML5, CSS3, Javascript</span>,
                jQuery, Vue.js/Nuxt.js, <span  className="font-weight-bold">Bootstrap, SASS (BEM), Wordpress, </span>
                 Flask, Jinja2, React, Bootstrap.
                 <br/><br/>
                 <span class="text-warning">Mid/Tools |</span>
                 <span  className="font-weight-bold"> GraphQL, TIBCO</span>, Enzyme, Jest, Eclipse, Webstorm,
                 PyCharm, <span  className="font-weight-bold">Photoshop, GIT</span>, CVS, Jira, Trello, ESLint.
                 <br/><br/>
                 <span class="text-danger">Back |</span> Laravel, Java,
                 <span  className="font-weight-bold"> Python</span>, PHP, C,
                 Spring Boot, Maven, Strapi, <span  className="font-weight-bold">XML/XSD, MySQL</span>, PL/SQL, Postgres, MongoDB.
                 <br/><br/>
                 <span class="text-info">DevOps |</span> Bitbucket, GitLab, Azure, Firebase.
                </h5>
              </Typist>
              </div>
              </div>

            </div>
          </div>

        </div>


    );
  }
}

export default About;
