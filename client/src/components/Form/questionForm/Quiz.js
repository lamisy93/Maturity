import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Question from "./Question";
import QuestionCount from "./QuestionCount";
// import AnswerOption from './AnswerOption';
import PropTypes from "prop-types";

function Quiz(props) {
  return (
    <ReactCSSTransitionGroup
      className="question-form-card"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
      key={props.questionId}
    >
      <QuestionCount counter={props.questionId} total={props.questionTotal} />
      <Question
        content={props.question}
        wordingcat={props.wordingcat}
        url={props.url}
      />
      <form className="form">
        <div className="form-inputs">
          {/* {props.answerOptions.map(renderAnswerOptions)} */}
          <div className="inputGroup">
            <input id="radio1" name="radio" type="radio" />
            <label htmlFor="radio1">Oui</label>
          </div>
          <div className="inputGroup">
            <input id="radio2" name="radio" type="radio" />
            <label htmlFor="radio2" onClick={props.comment}>
              Non
            </label>
          </div>
          <textarea name="comment" style={{ marginTop: "50px" }} />
        </div>
      </form>
    </ReactCSSTransitionGroup>
  );
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  // answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  wordingcat: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  // onAnswerSelected: PropTypes.func.isRequired,
  comment: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired
};

export default Quiz;
