import React, { Component } from "react";
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

    return data.map((campaign, key) => (
      <div key={key}>
        {campaign.namecamp} {campaign.state} {campaign.date}
      </div>
    ));
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
    return data.map((campaign, key) => (
      <div key={key}>
        {"Campagne :"} {campaign.namecamp} {"Statut :"} {campaign.state}{" "}
        {"Fait le :"}
        {campaign.date}
      </div>
    ));
  };

  render() {
    if (this.state.campaign.length === 0) {
      console.log(this.state.campaign.length);
      return <p>Aucune campagne enregistrée</p>;
    } else {
      console.log(this.state.campaign.length);
      return (
        <div className="ft-campaign">
          <a href="/">
            <i class="fas fa-bars ham" alt="#" />
          </a>
          <h1 class="titre">Historique des campagnes</h1>
          <hr class="statut" />

          <div class="statut">
            <div class="cours">
              <i class="far fa-calendar-alt" />
              <p>Campagne en cours</p>
              <div>{this.getCampaignInProgress(this.Id)}</div>
            </div>

            <div class="termine">
              <Link to={{ pathname: `/Result/${this.Name}/${this.Id}` }}>
                <div class="A">
                  <p class="termine">
                    Campagne terminée
                    <div>{this.getCampaignsFinish(this.Id)}</div>
                  </p>
                  <i class="far fa-check-circle validate " />
                </div>
              </Link>

              <div class="B">
                <p class="termine">
                  Campagne {this.Name}
                  <br />
                  25/10/2018
                </p>
                <i class="far fa-check-circle validate" />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
