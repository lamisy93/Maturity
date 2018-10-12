import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

function Question(props) {

  return (
    <Fragment>
      <h2>{props.wordingcat}</h2>
      <a href={props.url} target="new">
        <p className="question">{props.content}</p>
      </a>
    </Fragment>
  );

}

Question.propTypes = {
  content: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Question;