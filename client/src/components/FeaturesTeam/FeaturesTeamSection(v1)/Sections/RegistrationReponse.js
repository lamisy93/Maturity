import React, { Component } from "react";

class registrationReponse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.createReponse = this.createReponse.bind(this);
  }

  createReponse(event) {
    event.preventDefault();
    var data = {
      wording: "",
      action: "",
      campagne_id: this.setState(23),
      question_id: this.setState(1)
    };
    console.log(data);
    fetch("http://localhost:5000/api/v1/campaign/createReponse", {
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
          this.setState({ msg: "Reponse created" });
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  logChange(e) {
    this.setState({
      [e.target.wording]: e.target.value,
      [e.target.action]: e.target.value
    });
  }

  render() {
    return <div />;
  }
}
