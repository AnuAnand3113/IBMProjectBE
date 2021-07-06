"user strict";

module.exports.register = async server => {
    server.route( {
        method: "GET",
        path: "/api/events",
        handler: async request => {
            try {
                const db = request.server.plugins.sql.client;
                const userId = "546";
                const res = await db.events.getEvents( userId );
                console.log(res);
                return res;
            } catch( err ) {
                console.log ( err );
            }
        }
    });
};