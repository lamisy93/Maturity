/* jshint esversion : 6 */

// @root/api/createCampaign.js

// fonction createCampaign qui repond à la requête, elle renvoie une réponse et se connecte à la database

function createCampaign(req, res, connection) {
  const createCampaignModel = require("../model/createCampaign")(connection);
  createCampaignModel.createCampaign((err, dataset) => {
    if (err) {
      console.error("err in createCampaign", err);
    }
    res.send(dataset);
  }, req.body); // post datas ici ...
}

module.exports = createCampaign;
