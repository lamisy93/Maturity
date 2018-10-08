/* jshint esversion : 6 */

// @root/api/campaignFinish.js

const campaignFinishAPI = function campaignFinishAPI(connection) {
  const router = require("express").Router();
  const campaignFinishModel = require("./../model/campaignFinish")(connection);

  router.get("/campaignFinish/:id", (req, res) => {
    campaignFinishModel.get((err, dataset) => {
      res.send(dataset[0]);
    }, req.params.id);
  });

  router.get("/campaignFinish", (req, res) => {
    campaignFinishModel.get((err, dataset) => {
      res.send(dataset);
    }, null);
  });

  return router;
};

module.exports = campaignFinishAPI;
