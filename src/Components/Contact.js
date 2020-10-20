import React, { Component } from 'react';

import { FormattedMessage } from 'react-intl';

class Contact extends Component {
  render() {

    if(this.props.data){
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">
               <h1><span><FormattedMessage id="Contact" /></span></h1>
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
						   <label htmlFor="contactName"><FormattedMessage id="FormName" /><span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="name" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject"><FormattedMessage id="FormSubject" /></label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="subject" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage"><FormattedMessage id="FormMsg" /><span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="comment"></textarea>
                  </div>

                  <div>
                     <button className="submit"><FormattedMessage id="FormSend" /></button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning">Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i><FormattedMessage id="FormSuccess" /><br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">
					   <h4><FormattedMessage id="ContactInfoMsg" /></h4>
					   <p className="address">
						   <FormattedMessage id="Name" /><br />
						   <FormattedMessage id="Address" /> <br />
						   <FormattedMessage id="City" /> <FormattedMessage id="State" />, <FormattedMessage id="Zip" /><br />
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
