/*jshint esversion :  6 */

// @root/model/displayQuestions.js

const displayQuestionsModel = function displayQuestionsModel(connection) {
  const get = function displayQuestions(clbk, id) {
    var sql;

    sql =
      "SELECT ques.id as idques, number, cat.wording as wordingcat, ques.wording as wordingques, url FROM question as ques INNER JOIN categorie as cat ON cat.id = ques.categorie_id";

    connection.query(sql, [id], (error, results, fields) => {
      // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
      if (error) return clbk(error, null);
      return clbk(null, results);
    });
  };

  return {
    get
  };
};

module.exports = displayQuestionsModel;
