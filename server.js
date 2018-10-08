const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// const path = require('path');

const campaignRouter = require("./api/index.js");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
// const baseURL = `http://localhost:${port}`;

// API calls

app.use(express.static(__dirname + "/client/src"));

app.use("/api/v1/campaign", campaignRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
