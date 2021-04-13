import React from 'react';
import './contact-section.styles.scss';
import EmailForm from '../email-form/email-form.component';
import Sitemap from '../sitemap/sitemap.component';
import ContactInfo from '../contact-info/contact-info.component';

const Contact = () => (
  <div className='contact-container' id='contact'>
    <EmailForm />
    <Sitemap />
    <ContactInfo />
  </div>  
)

export default Contact;