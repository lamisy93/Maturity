/*jshint esversion :  6 */

// @root/model/campaign.js

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

  //   const remove = function deleteCampagne(clbk, ids) {
  //     // la clause SQL IN permet de chercher une valeur dans un tableau
  //     const q = "DELETE FROM campagne WHERE id IN (?)";

  //     connection.query(q, [ids], function(err, res, fields) {
  //       // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
  //       if (err) return clbk(res, null);
  //       return clbk(null, res);
  //     });
  //   };

  //   const update = function editCampagne(clbk, user) {
  //     const q = "UPDATE campagne SET name = ?, date = ?, status = ? WHERE id = ?";
  //     const payload = [user.name, user.lastname, user.email, user.id];
  //     connection.query(q, payload, function(err, res, fields) {
  //       // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
  //       if (err) return clbk(err, null);
  //       return clbk(null, res);
  //     });
  //   };

  const get = function getCampaign(clbk, id) {
    var sql;

    if (id && !isNaN(id)) {
      sql = "SELECT * FROM campagne WHERE id = ?";
    } else {
      sql = "SELECT * FROM campagne";
    }

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
