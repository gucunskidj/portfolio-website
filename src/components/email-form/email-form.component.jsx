import React from 'react';
import './email-form.styles.scss';

const EmailForm = () => {
  return (
    <div className='email-form-container'>
    <h3>Send me an email:</h3>
      <form name='contact' method='post' data-netlify='true'>
        <input type="hidden" name="form-name" value="contact" />
        <label>Name: <br/> <input type='text' name='name' required /></label> <br/>
        <label>Email: <br/> <input type='email' name='email' required /></label> <br/>
        <label>Message: <br/> <textarea name='message' required /></label> <br/>
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}

export default EmailForm;