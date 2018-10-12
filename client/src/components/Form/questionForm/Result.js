import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
// import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Result() {
  return (
    <ReactCSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div className="result-page">
        <h2 style={{ marginTop: "150px" }}>Merci d'avoir répondu !</h2>
        <img src={require("../../images/resultImg.png")} alt="" />
        <Link to="/">
          <button>Revenir à l'accueil</button>
        </Link>
      </div>
    </ReactCSSTransitionGroup>
  );
}

export default Result;
