/*jshint esversion :  6 */

// @root/model/campaignFinish.js

const campaignFinishModel = function campaignFinishModel(connection) {
  const displayReponse = function displayReponse(clbk, id) {
    var sql;

    sql =
      "SELECT ques.wording as wordingques, res.wording as wordingres, res.action as actionres FROM reponse as res LEFT JOIN question as ques ON ques.id = res.question_id";

    // sql =
    //   "SELECT ques.wording as wordingques, res.wording as wordingres, res.action as actionres, camp.state as statecamp FROM reponse as res LEFT JOIN question as ques campagne as camp ON ques.id = res.question_id camp.id = res.campagne_id WHERE campagne.state = 1";

    connection.query(sql, [id], (error, results, fields) => {
      // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
      if (error) return clbk(error, null);
      return clbk(null, results);
    });
  };

  return {
    displayReponse
  };
};

module.exports = campaignFinishModel;
