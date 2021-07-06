"use strict";

const sql = require ( "./sql" );
const server = require("../server");

module.exports.register = async server => {
    // register plugins
    await server.register ( sql );
};