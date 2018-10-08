/*jshint esversion :  6 */

// @root/model/createCampaign.js

// fichier database : il définit les requêtes sql de la fonction createCampaign

const createCampaignModel = function createCampaignModel(connection) {
  const createCampaign = function createCampaign(clbk, data) {
    console.log(data);

    const q =
      "INSERT INTO campagne (name, date, state, ft_id) VALUES (?, NOW(), 0, ?)";
    const payload = [data.name, data.ft_id];

    connection.query(q, payload, (err, res, cols) => {
      // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
      if (err) return clbk(err, null);
      return clbk(null, res);
    });
  };

  return {
    createCampaign
  };
};

module.exports = createCampaignModel;
