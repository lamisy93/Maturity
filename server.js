// Fichier server.js qui contient les require de nos middleware, de notre router, ainsi que le port utilisé

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const campaignRouter = require("./api/index.js");
const app = express();
const port = process.env.PORT || 5000;

// API calls

app.use(cors());

app.use(bodyParser.json());

app.use(express.static(__dirname + "/client/src"));

app.use("/api/v1/campaign", campaignRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
