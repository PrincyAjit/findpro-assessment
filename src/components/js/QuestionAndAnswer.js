import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../css/QuestionAndAnswer.css';

const QuestionAndAnswer = (props) => {
  const { question, answers } = props;
  const [showAnswers, setShowAnswers] = useState(false);
  return (
    <div id="questionAnswerDiv">
      <div id="question">
        <h4>{question}</h4>
        <button
          id="showAnswers"
          class="buttonStyling"
          onClick={() => {
            setShowAnswers(!showAnswers);
          }}
        >
          {' '}
          Show Answers
        </button>
      </div>
      {showAnswers && (
        <div id="answers-div">
          <h5>Responses:</h5>
          <ol>
            {answers?.map((answer) => (
              <li>{answer}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

QuestionAndAnswer.propTypes = {};

export default QuestionAndAnswer;
