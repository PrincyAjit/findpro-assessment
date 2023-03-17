import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import dummyData from '../../data.json';
import QuestionAndAnswer from '../../components/js/QuestionAndAnswer';
import '../css/FaqDashboard.css';

const FaqDashboard = (props) => {
  let navigate = useNavigate();
  let [questionnaireData, setQuestionnaireData] = useState(dummyData?.data);
  let [userQuestion, setUserQuestion] = useState('');
  const onUserQuestionSubmit = () => {
    if (userQuestion !== '') {
      const updatedQuestionnaireData = [...questionnaireData];
      const newQuestionInfo = { question: userQuestion, answers: [] };
      updatedQuestionnaireData.unshift(newQuestionInfo);
      setQuestionnaireData(updatedQuestionnaireData);
      setUserQuestion('');
    }
  };
  const onContactUsClick = () => {
    navigate('/contactus', { replace: true });
  };
  return (
    <React.Fragment>
      <header>
        <button onClick={onContactUsClick} id="contactus" class="buttonStyling">
          Contact us
        </button>
        <h1>Frequently Asked Questions</h1>
      </header>
      <div id="questionnaireDiv">
        <div id="userQuestionDiv">
          <span id="questionLabel">Enter your question:</span>
          <textarea
            value={userQuestion}
            onChange={(e) => setUserQuestion(e.target.value)}
            id="userQuestion"
          ></textarea>
          <button
            onClick={onUserQuestionSubmit}
            id="submitButton"
            class="buttonStyling"
          >
            Submit
          </button>
        </div>
        {questionnaireData.map((questionInfo) => (
          <QuestionAndAnswer
            question={questionInfo?.question}
            answers={questionInfo?.answers}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

FaqDashboard.propTypes = {};

export default FaqDashboard;
