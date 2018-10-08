import React, { Component } from 'react';
import {  Link } from "react-router-dom";

export default class componentName extends Component {
  render() {
    return (
      <header>
        <Link to="/">
          <h2>Team Maturity Web</h2>
        </Link>
      </header>
    )
  }
}
