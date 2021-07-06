"use strict";


const fs = require( 'fs-extra' );
const path = require( 'path' );

const loadSqlQueries = async foldername => {
    // determine the file path for the folder
    const filePath = path.join(process.cwd(), "src", "data", foldername );

    // get a list of all the files in the folder
    const files = await fs.readdir( filePath );

    // only files that have the .sql extension
    const sqlFiles = files.filter( f => f.endsWith( ".sql" ) );

    // loop over the files and read in their contents
    const queries = {};
    for ( let i=0; i < sqlFiles.length; i++ ) {
        const query = fs.readFileSync( path.join( filePath, sqlFiles[i] ), { encoding: "UTF-8" } );
        queries[ sqlFiles[i].replace( ".sql", "" ) ] = query;
    }

    return queries;
};

module.exports = {
    loadSqlQueries
};