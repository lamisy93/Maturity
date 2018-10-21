/* jshint esversion : 6 */

// @root/api/campaignFinish.js

function campaignFinish(req, res, connection) {
  const campaignFinishModel = require("../model/campaignFinish")(connection);
  campaignFinishModel.campaignFinish((err, dataset) => {
    if (err) {
      console.error("err in campaignFinish", err);
    }
    res.send(dataset);
  }, req.body); // post datas ici ...
}

module.exports = campaignFinish;
