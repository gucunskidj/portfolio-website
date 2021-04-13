import React from 'react';
import './contact-info.styles.scss';
import CONTACT_DATA from './contact.data';
import ContactInfoItems from '../contact-info-items/contact-info-items.component';

const ContactInfo = () => {

  return (
    <div className='contact-info-container'>
      <h3>Contact info</h3>
      {
        CONTACT_DATA.map(({id, ...otherContactProps}) => (
          <ContactInfoItems key={id} {...otherContactProps}/>
        ))
      }
      <span>Download my resume:</span>
      <button>Resume</button>
    </div>
  )
}

export default ContactInfo;