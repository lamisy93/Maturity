function displayQuestions(req, res, connection) {
  const displayQuestionsModel = require("../model/displayQuestions")(
    connection
  );
  displayQuestionsModel.get((err, dataset) => {
    if (err) {
      console.error("err in displayQuestions", err);
    }
    res.send(dataset);
  }, req.body); // post datas ici ...
}

module.exports = displayQuestions;
