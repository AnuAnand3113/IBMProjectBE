"use strict";

const utils = require ( "../utils" );

const register = async ( { sql , getConnection } ) => {
    // read in all the .sql files for this folder
    const sqlQueries = await utils.loadSqlQueries( "events" );
    const cnx = await getConnection();
    // console.log(cnx);
    const getEvents =  async userid => {
        console.log("From DB ");
        let reuslt;
        // get a connection to SQL Server
        // try {
        //     let result;
           
        //     const userid = "1234";
        //     console.log("Gottttt");
        //     console.log(cnx);

        //     const res = await cnx.query("select * from events where userId = ?", [userid], function (
        //         error,
        //         results,
        //         fields) {
        //             if(error){
        //                 return error;  
        //             }
        //             reuslt = results;
        //             return results;

        //     });
        //     console.log(result);
        //     return result;
        
        // } catch (err) {
        //     console.log(err);
        // }

        return new Promise(function (resolve, reject) {
            cnx.query("select * from events where userId = ?", [userid], function (err, results, fields) {
              if (err) return reject(err);
              return resolve(results);
            });
          });
     

        // cnx.query("select * from events where userId = ?" ,[userid], function (
        //      error,
        //     results,
        //     fields) {
        //         if(results)
        //         { 
        //             var string=JSON.stringify(results);
        //             var resultInJSON =  JSON.parse(string);
        //             console.log(resultInJSON);
        //             reuslt = resultInJSON;
        //             console.log(reuslt);
        //             console.log("hhdahdj");
        //             console.log(reuslt);
        //             return reuslt;
        //         }
                
        //  });
            
    };

    return {
        getEvents
    };
};

module.exports = { register };