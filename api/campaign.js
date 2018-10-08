/* jshint esversion : 6 */

// @root/api/campaign.js

function createReponse(req, res, connection) {
  const createReponseModel = require("../model/campaign")(connection);
  createReponseModel.createReponse((err, dataset) => {
    if (err) {
      console.error("err in createReponse", err);
    }
    res.send(dataset);
  }, req.body); // post datas ici ...
}

module.exports = createReponse;
