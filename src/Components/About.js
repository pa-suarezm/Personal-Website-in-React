import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import { FormattedMessage } from 'react-intl';

class About extends Component {
  render() {

    if(this.props.data){
      var profilepic= "images/"+this.props.data.image;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src={profilepic} alt="Pablo Suarez Profile Pic" />
            </div>
            <div className="nine columns main-col">
               <h2><FormattedMessage id="About" /></h2>

               <p><FormattedMessage id="Bio" /></p>
               <div className="row">
                  <div className="columns contact-details">
                     <h2><FormattedMessage id="Contact" /></h2>
                     <p className="address">
                        <span><FormattedMessage id="Name" /></span><br />
                        <span><FormattedMessage id="Address" /><br />
                              <FormattedMessage id="City" /> <FormattedMessage id="State" />, <FormattedMessage id="Zip" />
                     </span><br />
                        <span>{phone}</span><br />
                        <span>{email}</span>
                     </p>
                  </div>
                  <div className="columns download">
                     <p>
                        <a href={resumeDownload} className="button"><span id="download-icon"><FontAwesomeIcon icon = {faDownload}/></span><FormattedMessage id="DownloadCV" /></a>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}

export default About;
