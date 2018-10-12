import React from 'react';
import PropTypes from 'prop-types';

function QuestionCount(props) {
  return (
    <div className="questionCount">
      <h3>{props.counter} <span>/ {props.total}</span></h3>
      <hr/>
    </div>
  );

}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default QuestionCount;