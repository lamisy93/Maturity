// Fichier contenant notre router et nos routes react

import React, { Component } from "react";
import "./App.scss";
import FeaturesTeam from "./components/FeaturesTeam/FeaturesTeamCard/FeaturesTeamCard";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FeaturesTeamSection from "./components/FeaturesTeam/FeaturesTeamSection/FeaturesTeamSection";
import FeaturesTeamCampaign from "./components/FeaturesTeam/FeaturesTeamCampaign/FeaturesTeamCampaign";
import FeaturesTeamCampaignResult from "./components/FeaturesTeam/FeaturesTeamCampaignResult/FeaturesTeamCampaignResult";
class App extends Component {
  constructor() {
    super();
    this.state = {
      featuresTeam: []
    };
  }

  componentDidMount() {
    sessionStorage.clear();
    this.callApi()
      .then(featuresTeam => {
        this.setState({ featuresTeam });
      })
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const featuresTeam = await fetch("/api/v1/campaign/getfeaturesTeam");
    const body = await featuresTeam.json();

    if (featuresTeam.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Route
            exact
            path="/"
            render={props => (
              <div className="ftWrapper">
                <FeaturesTeam />
              </div>
            )}
          />
          <Route path="/Form" component={Form} />
          <Route
            path="/Section/:teamName/:teamId"
            component={FeaturesTeamSection}
          />
          <Route
            path="/FeaturesTeamCampaign/:teamName?/:teamId?"
            component={FeaturesTeamCampaign}
          />
          <Route path="/FeaturesTeamCampaignResult/:teamName?/:teamId?" component={FeaturesTeamCampaignResult} />
        </div>
      </Router>
    );
  }
}

export default App;
