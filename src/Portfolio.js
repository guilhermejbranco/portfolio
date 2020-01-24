import React from 'react';
import './Portfolio.css'
import Project from './Project';

class Portfolio extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (

        <div className="position-absolute mt-3 pl-5 pr-5">
          <h2 className="text-uppercase font-weight-bold text-center">Portfolio.</h2>
          <hr/>
          <div className="row">

            <Project parentProps={{
              title:"YoungNetwork Group",
              year:"2015",
              link:"https://www.youngnetworkgroup.com/en/",
              img:"young",
              description: "In charge of implementing a multi-site for the company YoungNetwork Group.\
              Received the design template from the artistic team, and implemented the\
              wordpress theme from scratch.",
              teamSize: "2",
              company: "YoungNetwork Group",
              techStack: "HTML5, CSS3, Bootstrap, Javascript, jQuery, Wordpress, SASS, PHP, GIT, Bower"

          }}/>

          <Project parentProps={{
            title:"FMH 75 Years",
            year:"2015",
            link:"https://www.fmh.ulisboa.pt/75anos/",
            img:"fmh",
            description: "In charge of implementing a comemorative website for Faculdade de Motricidade Humana.\
            Received the design template from the artistic team, and implemented the\
            wordpress theme from scratch.",
            teamSize: "2",
            company: "YoungNetwork Group",
            techStack: "HTML5, CSS3, Bootstrap, Javascript, jQuery, Wordpress, SASS, PHP, GIT, Bower"
        }}/>

        <Project parentProps={{
          title:"Mercado de Letras Editora",
          year:"2017",
          link:"https://MERCADODELETRAS.PT",
          img:"ml",
          description: "Designed and developed a website for the publisher Mercado de Letras.\
          Created the design, and implemented the wordpress theme from scratch.",
          teamSize: "1",
          company: "Freelance",
          techStack: "HTML5, CSS3, Bootstrap, Javascript, jQuery, Wordpress, SASS, PHP"
        }}/>

        <Project parentProps={{
          title:"Wedding Website",
          year:"2019",
          link:"https://clarajoao2019.com",
          img:"cj",
          description: "Designed and developed a website for wedding.\
          Created the design, and implemented the wordpress theme from scratch.",
          teamSize: "1",
          company: "Freelance",
          techStack: "HTML5, CSS3, Bootstrap, Javascript, Wordpress, SASS, PHP"
        }}/>

        <Project parentProps={{
          title:"News Website",
          year:"2019",
          link:"#",
          img:"news",
          description: "Designed and developed a website for fetching news from all around the world.\
          Created the design, and developed the website to improve my set of skills and technology stack.",
          teamSize: "1",
          company: "Personal",
          techStack: "HTML5, CSS3, Bootstrap, Vue.js, Axios, SASS, GIT"
        }}/>

        <Project parentProps={{
          title:"Weather Website",
          year:"2019",
          link:"https://guilhermejbranco.github.io/weather-advertio",
          img:"weather",
          description: "Designed and developed a website for fetching weather from all around the world.\
          Created the design, and developed the website to improve my set of skills and technology stack.",
          teamSize: "1",
          company: "Personal",
          techStack: "HTML5, CSS3, Bootstrap, React, Ajax, GIT"
        }}/>

        <Project parentProps={{
          title:"Invoice Website",
          year:"2020",
          link:"https://guilhermejbranco.github.io/invoicexpress",
          img:"xpress",
          description: "Designed and developed a website for displaying a list of Invoices.\
          Created the design, and developed the website to improve my set of skills and technology stack.",
          teamSize: "1",
          company: "Personal",
          techStack: "HTML5, CSS3, Bootstrap, React, SASS, GIT, Enzyme, Jest"
        }}/>

        <Project parentProps={{
          title:"Translation Website",
          year:"2020",
          link:"https://fallouturlerror.com",
          img:"",
          description: "Designed and developed a website for translation using the Unbabel API.\
          Created the design, and developed the website to improve my set of skills and technology stack.",
          teamSize: "1",
          company: "Personal",
          techStack: "HTML5, CSS3, Bootstrap, Flask, Python, Postgres, Jinja2, GIT"
        }}/>



          </div>

        </div>


    );
  }
}

export default Portfolio;
