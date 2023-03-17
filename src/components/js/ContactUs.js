import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../css/ContactUs.css';

const ContactUs = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <React.Fragment>
      <h1>Contact Us</h1>
      <form>
        <label>
          Enter your name:
          <input type="text" value={name} id="userName" name="userName"></input>
        </label>
        <label>
          Enter your email:
          <input
            type="email"
            value={email}
            id="userEmail"
            name="userEmail"
          ></input>
        </label>
        <label id="queryDiv">
          Enter your query:
          <textarea
            cols="20"
            rows="3"
            id="queryDetails"
            name="queryDetails"
          ></textarea>
        </label>

        <input type="submit" class="buttonStyling" />
      </form>
    </React.Fragment>
  );
};

ContactUs.propTypes = {};

export default ContactUs;
