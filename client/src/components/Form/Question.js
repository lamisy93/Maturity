import React from "react";
var Question = React.createClass({
  propTypes: {
    setAnswer: React.PropTypes.func,
    validateAnswers: React.PropTypes.func,
    data: React.PropTypes.obj
  },

  render: function() {
    var answersNodes = Object.keys(this.props.data.answers).map(
      function(value, index) {
        return (
          <div>
            <input
              id={"answer-input-" + index}
              type="checkbox"
              value={value}
              onChange={this.props.setAnswer}
              defaultChecked={false}
            />
            <label htmlFor={"answer-input-" + index}>
              {parseInt(index) +
                1 +
                ": " +
                this.props.data.answers[index].value}
            </label>
          </div>
        );
      }.bind(this)
    );

    return (
      <div>
        <h4>{parseInt(this.props.id) + 1 + ": " + this.props.data.question}</h4>
        <form>
          {answersNodes}
          <br />
          <button type="button" onClick={this.props.validateAnswers}>
            Validate answer
          </button>
        </form>
      </div>
    );
  },

  renderResult: function() {
    var result = Object.keys(this.state.quiz.questions).map(
      function(value, index) {
        if (this.isAnswerRight(value)) {
          return <div>{"Question " + index + ": You were right!"}</div>;
        } else {
          return <div>{"Question " + index + ": You were wrong!"}</div>;
        }
      }.bind(this)
    );
  }
});
module.exports = Question;
