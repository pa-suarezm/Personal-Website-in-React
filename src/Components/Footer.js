import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faItchIo } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks = 
      [
        <li key="linkedin"><a href="https://www.linkedin.com/in/pablo-andres-suarez/"><FontAwesomeIcon icon = {faLinkedinIn} /></a></li>,
        <li key="github"><a href="https://github.com/pa-suarezm"><FontAwesomeIcon icon = {faGithub}/></a></li>,
        <li key="itch.io"><a href="https://pa-suarezm.itch.io/"><FontAwesomeIcon icon = {faItchIo} /></a></li>,
        <li key="facebok"><a href="https://www.facebook.com/pabloasuarezm/"><FontAwesomeIcon icon = {faFacebookF} /></a></li>,
        <li key="twitter"><a href="https://twitter.com/PabloSuarezCSC"><FontAwesomeIcon icon = {faTwitter} /></a></li>,
        <li key="instagram"><a href="https://www.instagram.com/suarezcsc/"><FontAwesomeIcon icon = {faInstagram} /></a></li>,
        <li key="whatsapp"><a href="https://wa.me/573008801016"><FontAwesomeIcon icon = {faWhatsapp} /></a></li>,
        <li key="outlook"><a href="mailto:pabloasuarezm@hotmail.com"><FontAwesomeIcon icon = {faWindows} /></a></li>,
        <li key="gmail"><a href="mailto:pabloasuarezm@gmail.com"><FontAwesomeIcon icon = {faGoogle} /></a></li>         
      ];
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright">
              <li>&copy; Copyright 2017 Tim Baker</li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
