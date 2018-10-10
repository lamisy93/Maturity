import "./FeaturesTeamSection.scss";
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
const classNames = require("classnames");

export default class FeaturesTeamSection extends Component {
  constructor(props) {
    super(props);
    sessionStorage.setItem("ft-id", props.match.params.teamId);
    sessionStorage.setItem("ft-name", props.match.params.teamName);
    this.Name = sessionStorage.getItem("ft-name");
    this.Id = sessionStorage.getItem("ft-id");
    this.getCampaign = this.getCampaign.bind(this);
  }
  state = {
    show: false,
    name: "",
    date: "",
    state: "",
    ft_id: this.props.match.params.teamId,
    featuresTeam: [],
    campaign: []
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  saveName = event => {
    this.setState({ name: event.target.value }); // recuperation de la valeur de l'input
  };

  date = `Le ${new Date().toLocaleDateString()}`;

  // componentDidMount = () => {
  //   Promise.all([
  //     fetch("/api/v1/campaign/getfeaturesTeam"),
  //     fetch("/api/v1/campaign")
  //   ])
  //     .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
  //     .then(([data1, data2]) =>
  //       this.setState({
  //         featuresTeam: data1,
  //         campaign: data2
  //       })
  //     );
  // };

  getCampaign(event) {
    var data = {
      name: this.state.name,
      date: this.state.date,
      state: this.state.state
    };
    console.log(data);
    fetch("http://localhost:5000/api/v1/campaign", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
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
          window.self.setState({ Campaign: data });
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  createCampaign = event => {
    var data = {
      name: this.state.name, // met à jour le nom
      ft_id: this.props.match.params.teamId
    };
    console.log(data);
    fetch("http://localhost:5000/api/v1/campaign/createCampaign", {
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
          this.setState({ msg: "Campaign created" });
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  render() {
    return (
      <Fragment>
        <div className={classNames("team-section-icon", this.props.theme)}>
          <i className={this.props.icon} />
        </div>
        <div className="team-section">
          <h1>
            <span style={{ color: "rgb(245, 113, 24)" }}>Hello</span>,{" "}
            {this.Name} !
          </h1>
          <div>
            <button type="button" onClick={this.showModal}>
              <i className="far fa-plus-square fa-5x" />
              Créer une campagne
            </button>
            <Link
              key={this.Id}
              to={{ pathname: `/FeaturesTeamCampaign/${this.Name}/${this.Id}` }}
            >
              <button
                onClick={this.getCampaign}
                className="displayCampaigns-button"
                id="button-display"
              >
                <i className="far fa-eye" />
                Voir les campagnes
              </button>
            </Link>
          </div>
        </div>

        <Modal show={this.state.show} handleClose={this.hideModal}>
          <h1>Nouvelle Campagne</h1>
          <p dangerouslySetInnerHTML={{ __html: this.date }} />
          <img src={require("../../images/modelImg.png")} alt="popup" />
          <div>
            <input
              value={this.state.name}
              onChange={this.saveName}
              type="text"
              id="input"
              name="name"
              placeholder="Nom de la campagne"
            />
            <Link to="/Form">
              <button
                onClick={this.createCampaign}
                className="modal-button"
                id="button-campagne"
                type="submit"
              >
                Commencer
              </button>
            </Link>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <i className="fas fa-times fa-2x" onClick={handleClose} />
        {children}
      </div>
    </div>
  );
};
