/*jshint esversion :  6 */

// @root/model/campaignFinish.js

const campaignFinishModel = function campaignFinishModel(connection) {
  const displayReponse = function displayReponse(clbk, id) {
    var sql;

    sql =
      "SELECT res.wording as wordingres, res.action as actionres FROM reponse as res INNER JOIN question as ques ON ques.id = res.question_id INNER JOIN campagne as camp ON camp.id = res.campagne_id WHERE statecamp = 1";

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
