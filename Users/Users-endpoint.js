import { Endpoint } from '../framework/src/Endpoint.js'
import { jsonParser } from '../framework/src/Middleware.js';
import { Users } from './Users-component.js'

class UsersEndpoint extends Endpoint {
    constructor() {
        super("/users");
        this._users = new Users();
        this._users.add("biba");
        this._users.add("boba");
        
        super.addGetParam('id');
        super.addGet((req, res, params) => {
            jsonParser(req, res);

            // if has wanted params
            if(this.parseParams(req.method, params)) {
                res.end(JSON.stringify(this._users.get(params.get('id'))));
            } else {
                res.end(JSON.stringify(this._users.getAll()));
            }

        });

        this.addPostParam('name');
        super.addPost((req, res, params) => {
            jsonParser(req, res);

            // if has wanted param
            if(this.parseParams(req.method, params)) {
                this._users.add(params.get('name'));
            }

            res.end(JSON.stringify(this._users.getAll()));
        })

        this.addDeleteParam('id');
        super.addDelete((req, res, params) => {
            jsonParser(req, res);

            // if has wanted param
            if(this.parseParams(req.method, params)) {
                this._users.delete(params.get('id'));
            }

            res.end(JSON.stringify(this._users.getAll()));
        })
    }

}

export { UsersEndpoint }