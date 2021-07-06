"use strict"

const asset = require('assert');
const { assert } = require('console');
//require('dotenv').config({path: './.env'})

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, './.env') })

/*const NODE_ENV=development;
const HOST=Localhost;
const PORT=8080;
const HOST_URL=http://Localhost:8080;
const SQL_USER=sa;
const SQL_PASSWORD=Workingdays123@;
const SQL_DATABASE=accounthealth;
const SQL_SERVER=Localhost;
const SQL_ENCRYPT=false;
const COOKIE_ENCRYPT_PWD=superAwsomePasswordStringThatisAtleast32CharactersLong;

const OKTA_ORG_URL=https:// {yourURL}; 
const OKTA_CLIENT_ID={yourClientId};
const OKTA_CLIENT_SECRET={yourClientSecret}; */

const {
NODE_ENV,
PORT,
HOST,
HOST_URL,
COOKIE_ENCRYPT_PWD,
SQL_USER,
SQL_PASSWORD,
SQL_DATABASE,
SQL_SERVER
} = process.env;


//const sqlEncrypt = process.env.SQL_ENCRYPT == true;

assert(PORT, "Port is required");
assert(HOST, "HOST is required");
assert(HOST_URL, "HOST_URL is required");
assert(COOKIE_ENCRYPT_PWD, "COOKIE_ENCRYPT_PWD is required");
assert(SQL_SERVER, "SQL_SERVER is required");
assert(SQL_DATABASE, "SQL_DATABASE is required");
assert(SQL_USER, "SQL_USER is required");
assert(SQL_PASSWORD, "SQL_PASSWORD is required");

module.exports = {
    node_env: NODE_ENV,
    port: PORT,
    host: HOST,
    url: HOST_URL,
    cookie_PWD: COOKIE_ENCRYPT_PWD,
    sql: {
        server: SQL_SERVER,
        database: SQL_DATABASE,
        USER: SQL_USER,
        password: SQL_PASSWORD   
    } 
};