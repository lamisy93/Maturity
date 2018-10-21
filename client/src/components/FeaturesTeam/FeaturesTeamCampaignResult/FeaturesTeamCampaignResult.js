import "./FeaturesTeamCampaignResult.scss";
import React, { Component, Fragment } from "react";

export default class FeaturesTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    sessionStorage.setItem("ft-id", props.match.params.teamId);
    sessionStorage.setItem("ft-name", props.match.params.teamName);
    this.Name = sessionStorage.getItem("ft-name");
    this.Id = sessionStorage.getItem("ft-id");
  }

  render() {
    return (
      <Fragment>
        <h1 className="titrecampagne">Campagne {this.Name}</h1>
        <h3>25 juin 2019</h3>

        <div className="resultat">
          <div className="tableau">
            <section>
              <h1 className="h1title">Process</h1>
              <div className="tbl-content">
                <table cellPadding="0" cellSpacing="0" border="0">
                  <tbody>
                    <tr>
                      <th>A - Process: Les bases</th>
                      <th>Octobre 2018</th>
                      <th>Février 2019</th>
                      <th>Juin 2019</th>
                    </tr>
                    <tr>
                      <td>1. Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td> 2.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td> 3.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>B - Process: Maitriser vos livraisons</th>
                      <th>Octobre 2018</th>
                      <th>Février 2019</th>
                      <th>Juin 2019</th>
                    </tr>
                    <tr>
                      <td> 4.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>5.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td> 6.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>C - Process: Améliorer vos livraisons</th>
                      <th>Octobre 2018</th>
                      <th>Février 2019</th>
                      <th>Juin 2019</th>
                    </tr>
                    <tr>
                      <td>7.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>8.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>9.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td> 10.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        {" "}
                        D - Process: Aider les équipes partenaires à améliorer
                        leurs process
                      </th>
                      <th>Octobre 2018</th>
                      <th>Février 2019</th>
                      <th>Juin 2019</th>
                    </tr>
                    <tr>
                      <td>11.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <div className="tableau">
            <section>
              <h1 className="h1title">Qualité</h1>
              <div className="tbl-content">
                <table cellPadding="0" cellSpacing="0" border="0">
                  <tbody>
                    <tr>
                      <th>A - Qualité</th>
                      <th>Octobre 2018</th>
                      <th>Février 2019</th>
                      <th>Juin 2019</th>
                    </tr>
                    <tr>
                      <td>1. Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td> 2.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td> 3.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td> 4.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>5.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>B - Qualité</th>
                      <th>Octobre 2018</th>
                      <th>Février 2019</th>
                      <th>Juin 2019</th>
                    </tr>
                    <tr>
                      <td> 6.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>7.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>8.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>9.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td> 10.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>C - Qualité</th>
                      <th>Octobre 2018</th>
                      <th>Février 2019</th>
                      <th>Juin 2019</th>
                    </tr>
                    <tr>
                      <td>11.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>12.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>13.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>14.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>D - Qualité</th>
                      <th>Octobre 2018</th>
                      <th>Février 2019</th>
                      <th>Juin 2019</th>
                    </tr>
                    <tr>
                      <td>15.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>16.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>17.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>18.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>E - Qualité</th>
                      <th>Octobre 2018</th>
                      <th>Février 2019</th>
                      <th>Juin 2019</th>
                    </tr>
                    <tr>
                      <td>19.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>20.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>21.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>22.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <div className="tableau">
            <section>
              <h1 className="h1title">Valeur</h1>
              <div className="tbl-content">
                <table cellPadding="0" cellSpacing="0" border="0">
                  <tbody>
                    <tr>
                      <th>A - Valeur : IDENTIFIER LA VALEUR</th>
                      <th>Octobre 2018</th>
                      <th>Février 2019</th>
                      <th>Juin 2019</th>
                    </tr>
                    <tr>
                      <td>1. Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td> 2.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td> 3.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>B - Valeur : SE CONCENTRER SUR LA VALEUR</th>
                      <th>Octobre 2018</th>
                      <th>Février 2019</th>
                      <th>Juin 2019</th>
                    </tr>
                    <tr>
                      <td> 4.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>5.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td> 6.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>7.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>C - Valeur : LIVRER DE LA VALEUR</th>
                      <th>Octobre 2018</th>
                      <th>Février 2019</th>
                      <th>Juin 2019</th>
                    </tr>
                    <tr>
                      <td>8.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>9.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td> 10.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>D - Valeur: OPTIMISER LA VALEUR</th>
                      <th>Octobre 2018</th>
                      <th>Février 2019</th>
                      <th>Juin 2019</th>
                    </tr>
                    <tr>
                      <td>11.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>12.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>13.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>E - Valeur : DE LA VALEUR INNOVANTE</th>
                      <th>Octobre 2018</th>
                      <th>Février 2019</th>
                      <th>Juin 2019</th>
                    </tr>
                    <tr>
                      <td>14.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>15.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>16.Lorem ipsum ?</td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/checked.png")}
                          width="25"
                          height="25"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                      <td>
                        <img
                          alt=""
                          src={require("../../../../src/wrong.png")}
                          width="20"
                          height="20"
                          style={{ margin: "auto", display: "block" }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </Fragment>
    );
  }
}
