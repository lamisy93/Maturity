/*jshint esversion :  6 */

// @root/model/displayCampaign.js

const displayCampaignModel = function displayCampaignModel(connection) {
  const get = function displayCampaign(clbk, id) {
    var sql;

    sql =
      "SELECT campagne.id as idcamp, campagne.name as namecamp, state, date, ft.id as idft, campagne.ft_id, ft.name as nameft FROM campagne INNER JOIN ft ON ft.id = campagne.ft_id ORDER BY campagne.id DESC";

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

module.exports = displayCampaignModel;
