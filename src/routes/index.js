"use strict";

const api = require ("./api");
const server = require ("../server");

module.exports.register = async server => {

    await api.register ( server );

    server.route ({
        method: "Get",
        path: "/",
        handler: async ( request, h ) => {
            return "My first hapi server!"
        }

    });
}