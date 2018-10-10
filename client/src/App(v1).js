import React, { Component } from "react";
import "./App.scss";
import FeaturesTeam from "./components/FeaturesTeam/FeaturesTeam";
import FeaturesTeamCampaign from "./components/FeaturesTeam/FeaturesTeamCampaign/FeaturesTeamCampaign";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import FeaturesTeamSection from "./components/FeaturesTeam/FeaturesTeamSection/FeaturesTeamSection";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      featuresTeam: [],
      campagnes: []
      // ft_id: []
    };
  }

  componentDidMount() {
    sessionStorage.clear();
    this.callApi()
      .then(featuresTeam => {
        this.setState({ featuresTeam });
      })
      // .then(res => {
      //   this.setState({ ft_id: res.tableau });
      //   sessionStorage.setItem("ft_id", res.tableau[0].ft_id);
      //   sessionStorage.getItem("ft_id");
      //   console.log(res.tableau[0].ft_id);
      // })

      // .catch(err => console.log(err));

      .then(campagnes => {
        this.setState({ campagnes });
      })
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/v1/campaign/getFeaturesTeam");
    const body1 = await response.json();
    const featuresTeam = await fetch("/api/v1/campaign/getfeaturesTeam");
    const body = await featuresTeam.json();

    if (response.status !== 200) throw Error(body1.message);

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
                {this.state.featuresTeam.map(ft => (
                  <Link key={ft.id} to={{ pathname: `/section/${ft.name}` }}>
                    <FeaturesTeam
                      key={ft.id}
                      ftName={ft.name}
                      icon={ft.icon}
                      theme={ft.theme}
                      status="..."
                      campagneName="Pas de campagne"
                    />
                  </Link>
                ))}
              </div>
            )}
          />
          <Route path="/Form" component={Form} />
          <Route path="/Section/:teamNom" component={FeaturesTeamSection} />
          <Route
            path="/FeaturesTeamCampaign"
            component={FeaturesTeamCampaign}
          />
        </div>
      </Router>
    );
  }
}

export default App;
