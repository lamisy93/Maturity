/* jshint esversion : 6 */

// @root/api/displayCampaign.js

function displayCampaign(req, res, connection) {
  const displayCampaignModel = require("../model/displayCampaign")(connection);
  displayCampaignModel.get((err, dataset) => {
    if (err) {
      console.error("err in displayCampaign", err);
    }
    res.send(dataset);
  }, req.body); // post datas ici ...
}

module.exports = displayCampaign;
