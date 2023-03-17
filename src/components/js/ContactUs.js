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
        <div id="personalDetails">
          <label>
            Enter your name:
            <input
              type="text"
              value={name}
              id="userName"
              name="userName"
            ></input>
          </label>
          <br />
          <br />
          <label>
            Enter your email:
            <input
              type="email"
              value={email}
              id="userEmail"
              name="userEmail"
            ></input>
          </label>
        </div>
        <div id="queryDiv">
          <label>
            Enter your query:
            <textarea
              cols="20"
              rows="3"
              id="queryDetails"
              name="queryDetails"
            ></textarea>
          </label>
        </div>
        <input type="submit" />
      </form>
    </React.Fragment>
  );
};

ContactUs.propTypes = {};

export default ContactUs;
