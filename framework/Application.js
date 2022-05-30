import * as http from 'http'
import { Router } from './src/Router.js'

class Application {
    constructor() {
        this._router = new Router();
        this._server = this._createServer();
    }
    
    _createServer() {
        return http.createServer((req, res) => {
            if(this._router.response(req, res)) {
                res.end("URL ERROR");
            }
        });
    }
    
    routerRegister(endpoint) {
        this._router.add(endpoint);
    }

    listen(PORT, callback) {
        this._server.listen(PORT, callback);
    }
}

export { Application }