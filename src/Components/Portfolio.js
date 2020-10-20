import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import { FormattedMessage } from 'react-intl';

class Portfolio extends Component {

  constructor(props)
  {
    super(props);
  }

  chooseProjects()
  {
    var locale = String(this.props.locale);

    if(locale.startsWith("es"))
    {
      return this.props.data.projectsEs;
    }
    else
    {
      return this.props.data.projectsEn;
    }
  }

  render() {

    if(this.props.data){
      var projects = this.chooseProjects().map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} max-width="975" max-height="800"/>
              <div className="overlay">
                <div className="portfolio-item-meta">                  
                  <h5><FontAwesomeIcon icon = {faLink}/> {projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1><FormattedMessage id="ProjectsMsg" /></h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
