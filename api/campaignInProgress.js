/* jshint esversion : 6 */

// @root/api/campaignInProgress.js

const campaignInProgressAPI = function campaignInProgressAPI(connection) {
  const router = require("express").Router();
  const campaignInProgressModel = require("../model/campaignInProgress")(
    connection
  );

  router.post("/campaignInProgress", (req, res) => {
    campaignInProgressModel.create((err, dataset) => {
      res.send(dataset);
    }, req.body); // post datas ici ...
  });

  router.get("/campaignInProgress/:id", (req, res) => {
    campaignInProgressModel.get((err, dataset) => {
      res.send(dataset[0]);
    }, req.params.id);
  });

  router.get("/campaignInProgress", (req, res) => {
    campaignInProgressModel.get((err, dataset) => {
      res.send(dataset);
    }, null);
  });

  return router;
};

module.exports = campaignInProgressAPI;
