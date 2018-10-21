/*jshint esversion :  6 */

// @root/model/campaign.

// Requête pour les tests

const createReponseModel = function createReponseModel(connection) {
  const createReponse = function createReponse(clbk, data) {
    const q =
      "INSERT INTO reponse (wording, action, campagne_id, question_id) VALUES (?, ?, ?, ?)";
    const payload = [
      data.wording,
      data.action,
      data.campagne_id,
      data.question_id
    ];

    connection.query(q, payload, (err, res, cols) => {
      // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
      if (err) return clbk(err, null);
      return clbk(null, res);
    });
  };

  const get = function getReponse(clbk, id) {
    var sql;

      sql = "SELECT * FROM reponse WHERE id = ?";


    connection.query(sql, [id], (error, results, fields) => {
      // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
      if (error) return clbk(error, null);
      return clbk(null, results);
    });
  };

  return {
    createReponse,
    get
  };
};

module.exports = createReponseModel;
