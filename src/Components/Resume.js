import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class Resume extends Component {

  constructor(props)
  {
    super(props);
  }

  chooseEducation()
  {
    var locale = String(this.props.locale);

    if(locale.startsWith("es"))
    {
      return this.props.data.educationEs;
    }
    else
    {
      return this.props.data.educationEn;
    }
  }

  chooseWork()
  {
    var locale = String(this.props.locale);

    if(locale.startsWith("es"))
    {
      return this.props.data.workEs;
    }
    else
    {
      return this.props.data.workEn;
    }
  }

  render() {

    if(this.props.data){
      var education = this.chooseEducation().map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.chooseWork().map(function(work){
        return <div key={work.title}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span><FormattedMessage id="Education" /></span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span><FormattedMessage id="Work" /></span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span><FormattedMessage id="Skills" /></span></h1>
         </div>

         <div className="nine columns main-col">

            <p>
              <FormattedMessage id="SkillMsg" />
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
