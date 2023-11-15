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
          <h2 className="text-title text-center">Portfolio.</h2>
          <hr/>
          <div className="row">
          <Project parentProps={{
              title:"Goparity App",
              year:"2021",
              link:"https://app.goparity.com",
              img:"app-goparity",
              description: "Developed the app of Goparity. Implemented several flows, functionalities and animations",
              teamSize: "4",
              company: "Goparity",
              techStack: "Vue.js, HTML5, CSS3, TailwindCSS, SCSS, Laravel, MySQL"
          }}/>
          <Project parentProps={{
              title:"Goparity Website",
              year:"2021",
              link:"https://goparity.com",
              img:"goparity",
              description: "Developed some improvements of the public website of Goparity.",
              teamSize: "4",
              company: "Goparity",
              techStack: "Nuxt.js, HTML5, CSS3, TailwindCSS, SCSS, Laravel, MySQL"
          }}/>
          <Project parentProps={{
          title:"Firepanel Console",
          year:"2021",
          link:"https://console.firepanel.io",
          img:"firepanel-console",
          description: "Developed some functionalities of Firepanel (A firebase CMS). \
          Implemented firebase notifications, backups, recoveries, and webhook actions.",
          teamSize: "2",
          company: "Hypnotic Digital Agency",
          techStack: "Vue.js/Nuxt.js, HTML5, CSS3, Firebase, Node.js/Nest.js, MongoDB"
        }}/>
          <Project parentProps={{
          title:"Firepanel",
          year:"2021",
          link:"https://firepanel.io",
          img:"firepanel",
          description: "Developed a headless firebase/nuxt.js website.\
          Shows the funcionalities of the Firepanel CMS.",
          teamSize: "2",
          company: "Hypnotic Digital Agency",
          techStack: "Vue.js/Nuxt.js, HTML5, CSS3, Firebase, GraphQL, GitLab Devops, GIT"
        }}/>
          <Project parentProps={{
          title:"SCML",
          year:"2020",
          link:"https://scml.pt",
          img:"scml",
          description: "Developed a headless wordpress/nuxt.js website, while managing a team of 4 people.\
          Currently has 100+ dynamic pages, and uses graphQL for the integration.",
          teamSize: "6",
          company: "Hypnotic Digital Agency",
          techStack: "Vue.js/Nuxt.js, HTML5, CSS3, Bootstrap, Wordpress, GraphQL, Azure DevOPS, GIT"
        }}/>
          <Project parentProps={{
          title:"SCML - Loja da Cultura",
          year:"2020",
          link:"https://lojadacultura.scml.pt",
          img:"scml-loja",
          description: "Developed a headless wordpress/nuxt.js e-commerce, using WooCommerce.\
          Has it is a headless e-commerce, all the logic was implemented in the frontend, calling woocommerce endpoints.",
          teamSize: "2",
          company: "Hypnotic Digital Agency",
          techStack: "Vue.js/Nuxt.js, HTML5, CSS3, Bootstrap, Wordpress, WooCommerce, GraphQL, Azure DevOPS, GIT"
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
          title:"News Website",
          year:"2019",
          link:"https://fallouturlerror.com",
          img:"news",
          description: "Designed and developed a website for fetching news from all around the world.\
          Created the design, and developed the website to improve my set of skills and technology stack.",
          teamSize: "1",
          company: "Personal",
          techStack: "HTML5, CSS3, Bootstrap, Vue.js, Axios, SASS, GIT"
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
            title:"FMH 75 Years",
            year:"2015",
            link:"http://www.fmh.ulisboa.pt/75anos/",
            img:"fmh",
            description: "In charge of implementing a comemorative website for Faculdade de Motricidade Humana.\
            Received the design template from the artistic team, and implemented the\
            wordpress theme from scratch.",
            teamSize: "2",
            company: "YoungNetwork Group",
            techStack: "HTML5, CSS3, Bootstrap, Javascript, jQuery, Wordpress, SASS, PHP, GIT, Bower"
        }}/>


            <Project parentProps={{
              title:"YoungNetwork Group",
              year:"2015",
              link:"http://www.youngnetworkgroup.com/en/",
              img:"young",
              description: "In charge of implementing a multi-site for the company YoungNetwork Group.\
              Received the design template from the artistic team, and implemented the\
              wordpress theme from scratch.",
              teamSize: "2",
              company: "YoungNetwork Group",
              techStack: "HTML5, CSS3, Bootstrap, Javascript, jQuery, Wordpress, SASS, PHP, GIT, Bower"

          }}/>















          </div>

        </div>


    );
  }
}

export default Portfolio;
