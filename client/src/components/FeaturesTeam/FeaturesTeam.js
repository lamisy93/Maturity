import React, { Component } from 'react';
const classNames = require('classnames');

export default class FeaturesTeam extends Component {
  render() {
    return (
      <div className="ft-card">
          <div className={classNames('ft-card-icon', this.props.theme)}>
            <i className={this.props.icon} />
          </div>
          <h3 className={this.props.fontSize}>{this.props.ftName}</h3>
          <p>{this.props.campagneName}</p>
          <div className="hr"></div>
          <div className="ft-card-statut"></div>
          <p>{this.props.status}</p>
      </div>
    )
  }
}