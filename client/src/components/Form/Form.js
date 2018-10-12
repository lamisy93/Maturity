import React, { Component, Fragment } from "react";
// import update from 'react-addons-update';
import Quiz from "./questionForm/Quiz";
import Result from "./questionForm/Result";
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import "./Form.scss";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      quizQuestions: [],
      questionId: 1,
      question: "",
      wordingcat: "",
      url: "",
      answer: "",
      result: "",
      quizFinish: false
    };
  }

  componentWillMount() {
    this.callApi()
      .then(quizQuestions => {
        // quizQuestions.map((question) =>{/*console.log(question) this.shuffleArray(question.answers)*/ ques});

        this.setState({
          quizQuestions,
          question: quizQuestions[0].wordingques,
          url: quizQuestions[0].url,
          wordingcat: quizQuestions[0].wordingcat
        });
      })
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const featuresTeam = await fetch("/api/v1/campaign/displayQuestions");
    const body = await featuresTeam.json();

    if (featuresTeam.status !== 200) throw Error(body.message);

    return body;
  };

  shuffleArray(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  setNextQuestion = () => {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    if (!this.state.quizQuestions[counter]) {
      this.setState({
        quizFinish: true
      });
    } else {
      this.setState({
        counter: counter,
        questionId: questionId,
        question: this.state.quizQuestions[counter].wordingques,
        wordingcat: this.state.quizQuestions[counter].wordingcat,
        url: this.state.quizQuestions[counter].url,
        answerOptions: this.state.quizQuestions[counter].answers,
        answer: ""
      });
    }
  };

  renderQuiz() {
    const {
      answer,
      questionId,
      question,
      wordingcat,
      quizQuestions,
      url
    } = this.state;
    return (
      <Quiz
        answer={answer}
        questionId={questionId}
        question={question}
        wordingcat={wordingcat}
        url={url}
        comment={this.comment}
        questionTotal={quizQuestions.length}
        changeQuestion={this.setNextQuestion}
      />
    );
  }

  renderResult() {
    return <Result quizResult={this.state.result} />;
  }

  render() {
    return (
      <Fragment>
        {this.state.quizFinish ? this.renderResult() : this.renderQuiz()}
        <textarea style={{ marginTop: "50px" }} />
        <button className="question-form-button" onClick={this.setNextQuestion}>
          VALIDER
        </button>
      </Fragment>
    );
  }
}

export default Form;
