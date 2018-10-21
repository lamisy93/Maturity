/* jshint esversion : 6 */

// @root/api/campaignInProgress.js

function campaignInProgress(req, res, connection) {
  const campaignInProgressModel = require("../model/campaignInProgress")(connection);
  campaignInProgressModel.campaignInProgress((err, dataset) => {
    if (err) {
      console.error("err in campaignInProgress", err);
    }
    res.send(dataset);
  }, req.body); // post datas ici ...
}

module.exports = campaignInProgress;

