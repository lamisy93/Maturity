import "./CampaignList.scss";
// import { Link } from "react-router-dom";
import React, { Component, Fragment } from "react";
// const classNames = require("classnames");

export default class FeaturesTeam extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <a href="/">
          <i class="fas fa-bars ham" alt="#" />
        </a>
        <i class="far fa-handshake statut" alt="#" />
        <h1 class="titre">Mes campagnes </h1>
        <hr class="statut" />

        <div class="statut">
          <div class="cours">
            <h1 class="">En cours</h1>
            <i class="far fa-calendar-alt" />
            <p>Campagne Concrétisation</p>
            <p>25/06/2019</p>
          </div>

          <div class="termine">
            <div class="A">
              <p class="termine">
                Campagne Concrétisation
                <br /> 10/02/2019
              </p>
              <i class="far fa-check-circle validate " />
            </div>

            <div class="B">
              <p class="termine">
                Campagne Concrétisation
                <br />
                25/10/2018
              </p>
              <i class="far fa-check-circle validate" />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
