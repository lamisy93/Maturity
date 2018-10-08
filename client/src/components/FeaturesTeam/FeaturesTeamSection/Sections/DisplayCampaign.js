import React, { Component } from "react";

class displayCampaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.getCampaign = this.getCampaign.bind(this);
  }

  getCampaign(event) {
    event.preventDefault();
    var data = {
      name: this.state.name
    };
    console.log(data);
    fetch("http://localhost:5000/api/v1/campaign/getCampaign", {
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
          self.setState({ Campaign: data });
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  logChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return <div />;
  }
}
