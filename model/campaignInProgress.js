/*jshint esversion :  6 */

// @root/model/campaignInProgress.js

const campaignInProgressModel = function campaignInProgressModel(connection) {
  const completeCampaign = function completeCampaign(clbk, data) {
    const q =
      "INSERT INTO reponse (wording, action, campagne_id, question_id) VALUES (?, ?, ?, ?) INNER JOIN question ON question.id = reponse.question_id LEFT JOIN campagne ON campagne.id = reponse.campagne_id WHERE campagne.state = 0";
    const payload = [data.wording, data.action];

    connection.query(q, payload, (err, res, cols) => {
      // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
      if (err) return clbk(err, null);
      return clbk(null, res);
    });
  };

  const get = function getCampaign(clbk, id) {
    var sql;
    sql = sql =
      "";

    connection.query(sql, [id], (error, results, fields) => {
      // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
      if (error) return clbk(error, null);
      return clbk(null, results);
    });
  };

  return {
    completeCampaign,
    get
  };
};

module.exports = campaignInProgressModel;
