import React, { Component } from "react";

class displayQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wording: ""
    };
    this.getQuestions = this.getQuestions.bind(this);
  }

  getQuestions(event) {
    event.preventDefault();
    var data = {
      number: this.state.number,
      wording: this.state.wording,
      wordingques: this.state.wordingques,
      url: this.state.url
    };
    console.log(data);
    fetch("http://localhost:5000/api/v1/campaign/getQuestions", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        if (data === "success") {
          self.setState({ Questions: data });
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  logChange(e) {
    this.setState({
      [e.target.number]: e.target.value,
      [e.target.wording]: e.target.value,
      [e.target.wordingques]: e.target.value,
      [e.target.url]: e.target.value
    });
  }

  render() {
    return <div />;
  }
}
