/* jshint esversion : 6 */

// @root/api/displayCampaign.js

function getFeaturesTeam(req, res, connection) {
  const getFeaturesTeamModel = require("../model/getFeaturesTeam")(connection);
  getFeaturesTeamModel.get((err, dataset) => {
    if (err) {
      console.error("err in getFeaturesTeam", err);
    }
    res.send(dataset);
  }, req.body); // post datas ici ...
}

module.exports = getFeaturesTeam;