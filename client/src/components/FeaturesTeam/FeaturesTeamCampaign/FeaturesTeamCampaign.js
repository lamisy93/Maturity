import React, { Component } from "react";

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
        {campaign.namecamp} {campaign.state} {campaign.date}
      </div>
    ));
  };

  render() {
    if (this.state.campaign.length === 0) {
      return <p>Aucune campagne enregistrée</p>;
    } else {
      return (
        <div className="ft-campaign">
          <div className="ft-campaign-icon">
            <i className="fas fa-vial" />
          </div>
          <div className="ft-campaign-section">
            <div>
              <div className="en-cours">
                <div>{this.getCampaignInProgress(this.Id)}</div>
                <i className="far fa-calendar-alt" />
              </div>
              <div className="terminee">
                <div>{this.getCampaignsFinish(this.Id)}</div>
                <i className="far fa-calendar-alt" />
              </div>
            </div>
            <div />
          </div>
        </div>
      );
    }
  }
}
