/*jshint esversion :  6 */

// @root/model/campaignFinish.js

const getFeaturesTeamModel = function getFeaturesTeamModel(connection) {
    const get = function getFeaturesTeam(clbk, id) {
      var sql;
  
      sql = "SELECT * FROM ft";
  
      connection.query(sql, [id], (error, results, fields) => {
        if (error) return clbk(error, null);
        return clbk(null, results);
      });
    };
  
    return {
      get
    };
  };

module.exports = getFeaturesTeamModel;
