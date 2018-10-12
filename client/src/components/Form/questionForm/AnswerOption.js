import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

// constructor() {
//   super();
//   this.state = {
//     featuresTeam: []
//   };
// }

// componentDidMount = () => {
//   sessionStorage.clear();
//   this.callApi()
//     .then(featuresTeam => {
//       this.setState({ featuresTeam });
//       console.log();
//     })
//     .catch(err => console.log(err));
// }

// callApi = async () => {
//   const featuresTeam = await fetch("/api/v1/campaign/featuresTeam");
//   const body = await featuresTeam.json();

//   if (featuresTeam.status !== 200) throw Error(body.message);

//   return body;
// };

function AnswerOption(props) {

  return (
      <Fragment>
        {/* <input
          type="radio"
          name="radioGroup"
          checked={props.answerType === props.answer}
          id={props.answerType}
          value={props.answerType}
          disabled={props.answer}
          onChange={props.onAnswerSelected}
        />
        <label htmlFor={props.answerType}>
          {props.answerContent}
        </label> */}
    </Fragment>
  );

}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;