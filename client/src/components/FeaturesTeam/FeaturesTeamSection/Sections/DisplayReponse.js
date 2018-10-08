import React, { Component } from "react";

class displayReponse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wording: ""
    };
    this.getReponse = this.getReponse.bind(this);
  }

  getReponse(event) {
    event.preventDefault();
    var data = {
      wording: "",
      action: ""
    };
    console.log(data);
    fetch("http://localhost:5000/api/v1/campaign/getReponse", {
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
          self.setState({ Reponse: data });
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
