import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">
               <h1><span>Contacto</span></h1>
            </div>
            
            <div className="ten columns">
                  <p className="lead">{message}</p>
            </div>
         </div>

         <div className="row">
            <div className="eight columns">
               <form action="mailto:pabloasuarezm@hotmail.com" method="post" encType="text/plain" id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Nombre <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="name" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Asunto</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="subject" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Mensaje <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="comment"></textarea>
                  </div>

                  <div>
                     <button className="submit">Enviar</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning">Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Se envió el mensaje. ¡Gracias!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">
					   <h4>Dirección, correo, y teléfono</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city} {state}, {zip}<br />
						   <span>{phone}</span><br />
                     {email}
					   </p>
				   </div>
            </aside>
         </div>

      </section>
    );
  }
}

export default Contact;
