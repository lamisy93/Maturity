import React, { Component } from "react";
import Validation from "react-validation";
import "./validation.js";

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var data = {
      answer: this.state.answer
    };
    console.log(data);
    fetch("/users/new", {
      method: "POST",
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
          this.setState({ msg: "Thanks for registering" });
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  logChange(e) {
    this.setState({ [e.target.answer]: e.target.value });
  }

  render() {
    return (
      <div className="container register-form">
        <Validation.components.Form onSubmit={this.handleSubmit} method="POST">
          <Validation.components.Input
            onChange={this.logChange}
            className="form-response"
            value=""
            name="response"
            validations={["required"]}
          />
          <Validation.components.Texterea
            onChange={this.logChange}
            className="form-action"
            value=""
            placeholder="action"
            name="action"
          />
          <div className="submit-section">
            <Validation.components.Button className="btn-validate">
              Submit
            </Validation.components.Button>
          </div>
        </Validation.components.Form>
      </div>
    );
  }
}
