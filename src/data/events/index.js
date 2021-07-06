"use strict";

const utils = require ( "../utils" );

const register = async ( { sql , getConnection } ) => {
    // read in all the .sql files for this folder
    // const sqlQueries = await utils.loadSqlQueries( "events" );
    const cnx = await getConnection();
    // console.log(cnx);
    const getEvents =  async userid => {
  
        return new Promise(function (resolve, reject) {
            cnx.query("select * from events where userId = ?", [userid], function (err, results, fields) {
              if (err) return reject(err);
              return resolve(results);
            });
          });
            
    };

    return {
        getEvents
    };
};

module.exports = { register };