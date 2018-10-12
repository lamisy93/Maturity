import "./FeaturesTeamCard.scss";
import { Link } from "react-router-dom";
import React, { Component, Fragment } from "react";
const classNames = require("classnames");

export default class FeaturesTeam extends Component {
  constructor() {
    super();
    this.state = {
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

  getLastCampaignState = ftId => {
    let state;
    for (let i = 0; i < this.state.campaign.length; i++) {
      if (this.state.campaign[i].ft_id === ftId) {
        state = this.state.campaign[0].state;
        break;
      }
    }

    // const currentCampaign = this.state.campaign.find(
    //   ({ idft }) => idft === ftId
    // );

    switch (state) {
      case 0:
        return "En cours";
      case 1:
        return "Terminée";
      default:
        return "Aucune campagne";
    }
  };

  getLastCampaignName = ftId => {
    let name = [];
    for (let i = this.state.campaign.length - 1; i >= 0; i--) {
      if (this.state.campaign[i].ft_id === ftId)
        name = "Campagne: " + this.state.campaign[i].namecamp;
    }
    return name;
  };

  render() {
    return (
      <Fragment>
        {this.state.featuresTeam.map(ft => (
          <Link key={ft.id} to={{ pathname: `/Section/${ft.name}/${ft.id}` }}>
            <div className="ft-card" key={ft.id}>
              <div className={classNames("ft-card-icon", ft.theme)}>
                <i className={ft.icon} />
              </div>
              <h3>{ft.name}</h3>
              <p className="campaignName">{this.getLastCampaignName(ft.id)}</p>
              <div className="hr" />
              <div className="ft-card-statut" />

              {this.getLastCampaignState(ft.id)}
            </div>
          </Link>
        ))}
      </Fragment>
    );
  }
}
