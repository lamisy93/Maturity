/* jshint esversion : 6 */

// @root/api/index.js

// routes de l'api

var express = require("express");

createCampaign = require("./createCampaign.js"); // import de la fonction
displayCampaign = require("./displayCampaign.js");
displayQuestions = require("./displayQuestions.js");
createReponse = require("./campaign.js");
getFeaturesTeam = require("./getFeaturesTeam.js");

var router = express.Router();

const database = require(__dirname + "/../model")({
  password: "@mysql", // définition du mot de passe de mySQL
  database: "maturity" // base de donnée cible
});

router.post("/createCampaign", (req, res) => {
  console.log("Corps de la requête !", req.body);
  createCampaign(req, res, database.connection);
});

router.get("/displayCampaign", (req, res) => {
  displayCampaign(req, res, database.connection);
  console.log("Corps de la requête !", req.body);
}); // 2eme route

router.get("/", (req, res) => {
  displayCampaign(req, res, database.connection);
  console.log("Corps de la requête !", req.body);
});

router.get("/displayQuestions", (req, res) => {
  displayQuestions(req, res, database.connection);
  console.log("Corps de la requête !", req.body);
}); // 3eme route

router.get("/", (req, res) => {
  displayQuestions(req, res, database.connection);
  console.log("Corps de la requête !", req.body);
});

router.post("/campaign", (req, res) => {
  createReponse(req, res, database.connection);
  console.log("Corps de la requête !", req.body);
});

router.get("/getfeaturesTeam", (req, res) => {
  getFeaturesTeam(req, res, database.connection);
  console.log("Corps de la requête !", req.body);
});

// router.get("/campaign", (req, res) => {
//   displayReponse(req, res, database.connection);
//   console.log("Corps de la requête !", req.body);
// }); // 2eme route

module.exports = router;
