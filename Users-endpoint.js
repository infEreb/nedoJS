const Endpoint = require('./framework/src/Endpoint')

module.exports = class Users extends Endpoint {
    constructor() {
        super("/users");

        this.users = [ {id: 0, name: "BIBA"}, {id: 1, name: "BOBA"} ];

        super.addGet((req, res, params) => {
            if (!params.has('id') || Array.from(params).length != 1) {
                res.end("Error params");
                return;
            }
            res.end(JSON.stringify(this.users[params.get('id')]));
        })
    }

}