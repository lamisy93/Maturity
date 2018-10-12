import React, { Component, Fragment } from "react";
import "./FeaturesTeamCampaign.scss";
import { Link } from "react-router-dom";

export default class FeaturesTeamCampaign extends Component {
  constructor(props) {
    super(props);
    sessionStorage.setItem("ft-id", props.match.params.teamId);
    sessionStorage.setItem("ft-name", props.match.params.teamName);
    this.Name = sessionStorage.getItem("ft-name");
    this.Id = sessionStorage.getItem("ft-id");

    this.state = {
      name: "",
      featuresTeam: [],
      campaign: []
    };
  }

  componentDidMount = () => {
    Promise.all([
      fetch("/api/v1/campaign/getfeaturesTeam"),
      fetch("/api/v1/campaign")
    ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([data1, data2]) =>
        this.setState({
          featuresTeam: data1,
          campaign: data2
        })
      );
  };

  getCampaignInProgress = ftId => {
    const data = [];
    for (let i = 0; i < this.state.campaign.length; i++) {
      if (
        this.state.campaign[i].ft_id === parseInt(ftId) &&
        this.state.campaign[i].state === 0
      ) {
        data.push(this.state.campaign[i]);
        // let state = this.state.campaign[i].state;
        // return state = "En cours";
      }
    }

    return data.map((campaign, key) => {
      let state;
      if (campaign.state === 0) {
        state = "en cours";
      } else if (campaign.state === 1) {
        state = "Terminée";
      } else {
        state = "Aucune campagne";
      }
      return (
        <div key={key}>
          Campagne "{campaign.namecamp}" {state} réalisée le {campaign.date}
        </div>
      );
    });
  };

  getCampaignsFinish = ftId => {
    const data = [];
    for (let i = 0; i < this.state.campaign.length; i++) {
      if (
        this.state.campaign[i].ft_id === parseInt(ftId) &&
        this.state.campaign[i].state === 1
      ) {
        data.push(this.state.campaign[i]);
      }
    }

    return data.map((campaign, key) => {
      let state;
      if (campaign.state === 0) {
        state = "en cours";
      } else if (campaign.state === 1) {
        state = "terminée";
      } else {
        state = "Aucune campagne";
      }
      return (
        <div key={key}>
          Campagne {campaign.namecamp} {state} réalisée le {campaign.date}
        </div>
      );
    });
  };

  render() {
    const ftCampaigns = this.state.campaign.filter(
      campaign => campaign.ft_id === parseInt(this.Id)
    );
    if (ftCampaigns.length === 0) {
      console.log(ftCampaigns.length);
      return (
        <Fragment>
          <div className="cercle">
            <img
              className="noCampaign"
              alt=""
              src={require("../../../../src/noCampaign.png")}
              width="500"
              height="500"
            />
          </div>
          <p className="aucune">Aucune campagne enregistrée.</p>
        </Fragment>
      );
    } else {
      console.log(ftCampaigns.length);
      return (
        <div className="ft-campaign">
          <a href="/">
            <i className="fas fa-bars ham" alt="#" />
          </a>
          <h1 className="titre">Historique des campagnes</h1>
          <hr className="statut" />

          <div className="statut">
            <div className="cours">
              <p>Campagne en cours</p>
              <br />
              <div>{this.getCampaignInProgress(this.Id)}</div>
              <br />
              <i className="fas fa-spinner" style={{ fontSize: "50px" }} />
            </div>

            <div className="termine">
              <Link to={{ pathname: `/Result/${this.Name}/${this.Id}` }}>
                <div className="A">
                  <p className="termine">
                    Campagne terminée
                    <br />
                    <span style={{ color: "black" }}>
                      {this.Name}
                      <br />
                      25/06/2018
                    </span>
                  </p>
                  <div>{this.getCampaignsFinish(this.Id)}</div>
                  <i className="far fa-check-circle validate " />
                </div>
              </Link>

              <Link to={{ pathname: `/Result/${this.Name}/${this.Id}` }}>
                <div className="B">
                  <p className="termine">
                    Campagne terminée
                    <br />
                    <span style={{ color: "black" }}>
                      {this.Name}
                      <br />
                      23/03/2018
                    </span>
                  </p>
                  <i className="far fa-check-circle validate" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }
}
