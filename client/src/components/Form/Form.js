import React, { Component } from 'react';
// import update from 'react-addons-update';
// import quizQuestions from './api/quizQuestions';
// import Quiz from './questionForm/Quiz';
// import Result from './questionForm/Result';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Form.scss';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      questions: []
      // counter: 0,
      // questionId: 1,
      // question: '',
      // answerOptions: [],
      // answer: '',
      // answersCount: {
      //   Oui: 0,
      //   Non: 0,
      // }
    };

    // this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  // componentWillMount() {
  //   const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));
  //   this.setState({
  //     question: quizQuestions[0].question,
  //     answerOptions: shuffledAnswerOptions[0]
  //   });
  // }

  componentDidMount() {
    this.callApi()
      .then(questions => {
        this.setState({ questions });
      })
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const questions = await fetch('/api/v1/campaign/displayQuestions');
    const body = await questions.json();
    
    if (questions.status !== 200) throw Error(body.message);
    
    return body;
  };



  // shuffleArray(array) {
  //   let currentIndex = array.length, temporaryValue, randomIndex;

  //   // While there remain elements to shuffle...
  //   while (0 !== currentIndex) {

  //     // Pick a remaining element...
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;

  //     // And swap it with the current element.
  //     temporaryValue = array[currentIndex];
  //     array[currentIndex] = array[randomIndex];
  //     array[randomIndex] = temporaryValue;
  //   }

  //   return array;
  // };

  // handleAnswerSelected(event) {
  //   this.setUserAnswer(event.currentTarget.value);

  //   if (this.state.questionId < quizQuestions.length) {
  //       setTimeout(() => this.setNextQuestion(), 300);
  //   } else {
  //       setTimeout(() => this.setResults(this.getResults()), 300);
  //   }
  // }

  // setUserAnswer(answer) {
  //   const updatedAnswersCount = update(this.state.answersCount, {
  //     [answer]: {$apply: (currentValue) => currentValue + 1}
  //   });

  //   this.setState({
  //       answersCount: updatedAnswersCount,
  //       answer: answer
  //   });
  // }

  // setNextQuestion() {
  //   const counter = this.state.counter + 1;
  //   const questionId = this.state.questionId + 1;

  //   this.setState({
  //       counter: counter,
  //       questionId: questionId,
  //       question: quizQuestions[counter].question,
  //       answerOptions: quizQuestions[counter].answers,
  //       answer: ''
  //   });
  // }

  // getResults() {
  //   const answersCount = this.state.answersCount;
  //   const answersCountKeys = Object.keys(answersCount);
  //   const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
  //   const maxAnswerCount = Math.max.apply(null, answersCountValues);

  //   return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  // }

  // setResults(result) {
  //   if (result.length === 1) {
  //     this.setState({ result: result[0] });
  //   } else {
  //     this.setState({ result: 'Undetermined' });
  //   }
  // }

  // renderQuiz() {
  //   return (
  //     <Quiz
  //       answer={this.state.answer}
  //       answerOptions={this.state.answerOptions}
  //       questionId={this.state.questionId}
  //       question={this.state.question}
  //       questionTotal={quizQuestions.length}
  //       onAnswerSelected={this.handleAnswerSelected}
  //     />
  //   );
  // }

  // renderResult() {
  //   return (
  //     <Result quizResult={this.state.result} />
  //   );
  // }
  render() {
    return (
      <ReactCSSTransitionGroup
        className="question-form"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
      >
        {/* {this.state.result ? this.renderResult() : this.renderQuiz()} */}
        {this.state.questions.map((question, i) => (
          <div className="question-form-card" key={i}>
          <h2>{question.wordingcat}</h2>
              <p><a href={question.url} target="new">{question.wordingques}</a></p>
          </div>
      ))}
        
    </ReactCSSTransitionGroup>

    )
  }
}
