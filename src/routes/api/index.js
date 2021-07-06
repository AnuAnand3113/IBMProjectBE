"use strict";

const events = require ( "./events" );
const server = require ("../../server");


module.exports.register = async server => {
        await events.register ( server );
};