import React from 'react';
import './contact-info-items.styles.scss';

const ContactInfoItems = ({contactLogo, contactType, contactUrl}) => (
  <div className='contact-info-logo-type'>
    <div className='logo' style={{ backgroundImage: `url(${contactLogo})` }}>
    </div>
    <div className='type'>
      <a href={contactUrl} rel='noopener noreferrer' target='_blank'>
        {contactType}
      </a>
    </div>
  </div>
)

export default ContactInfoItems;