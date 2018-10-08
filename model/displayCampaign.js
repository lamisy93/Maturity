/*jshint esversion :  6 */

// @root/model/displayCampaign.js

const displayCampaignModel = function displayCampaignModel(connection) {
  const get = function displayCampaign(clbk, id) {
    var sql;

    sql = "SELECT name, date, state FROM campagne WHERE ft_id = 10";

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
