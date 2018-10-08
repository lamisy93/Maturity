import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
const classNames = require("classnames");

export default class FeaturesTeamSection extends Component {
  state = {
    show: false,
    name: ""
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  date = `Le ${new Date().toLocaleDateString()}`;

  createCampaign = event => {
    event.preventDefault();
    var data = {
      name: event.target.value,
      ft_id: 10
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
          <h1>Hello, {this.props.ftName} !</h1>
          <div>
            <button type="button" onClick={this.showModal}>
              <i className="far fa-plus-square fa-5x" />
              Ajouter une campagne
            </button>
            <button>
              <i className="far fa-eye" />
              Voir les campagnes
            </button>
          </div>
        </div>

        <Modal show={this.state.show} handleClose={this.hideModal}>
          <h1>Nouvelle Campagne</h1>
          <p dangerouslySetInnerHTML={{ __html: this.date }} />
          <img src={require("../../../images/modelImg.png")} alt="popup" />
          <div>
            <input
              value={this.state.name}
              // onChange={this.createCampaign}
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
