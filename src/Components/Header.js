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

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      /*var networks= this.props.data.social.map(function(network){
         return <li key={network.name}><a href={network.url}><FontAwesomeIcon icon={network.className} /></a></li>
      })*/
        /*return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })*/
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
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Inicio</a></li>
            <li><a className="smoothscroll" href="#about">Sobre mí</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Proyectos</a></li>
            <li><a className="smoothscroll" href="#contact">Contacto</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>Soy un <span>{occupation}</span> de {city}. {description}.</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>



   </header>
    );
  }
}

export default Header;
