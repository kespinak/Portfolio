import './FormStyles.css';

import React from 'react'

const Form = () => {
  return (
    <div className='form'>
      <form>
        <label for="name">Name:</label>
        <input type="text" id="name" value="text" required />
        <label for="email">Email:</label>
        <input type="email" id="email" value="email address" />
        <label for="subject">Subject:</label>
        <select class='selectWrapper' id="subject" required>
          <option class='selectBox' value="Freelance/business request">Freelance/business request</option>
          <option value="Job offer">Job offer</option>
          <option value="Other">Other</option>
        </select>
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" value="___-___-____" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" optional />
        <label for="message">Message:</label>
        <input type="text" id="message" value="text" required />
        <button className='btn btn-light' type="submit">Submit</button>
      </form> 
    </div>
  )
}

export default Form;