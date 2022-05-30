const EventEmitter = require('events')
const url = require('url')

module.exports = class Router {
    constructor() {
        this._emitter = new EventEmitter();
        this._endpoints = new Map();
    }

    get(endpoint_key) {
        return this._endpoints.get(endpoint_key);
    }

    add(endpoint_value) {
        this._endpoints.set(endpoint_value.getEndpoint(), endpoint_value);
        let methods = endpoint_value.getMethods();


        //endpoints events register
        Object.keys(methods).forEach(method => {
            this._emitter.on(endpoint_value.getMask(method), methods[method]);
        });
    }

    has(endpoint_key) {
        return this._endpoints.has(endpoint_key);
    }

    response(req, res) {
        let urlParts = url.parse(req.url);
        let endpoint = urlParts.pathname;
        let params = new URLSearchParams(urlParts.query);
        
        let method = req.method;

        if (!this._endpoints.has(endpoint)) {
            
            return true;
        }



        return !this._emitter.emit(this._endpoints.get(endpoint).getMask(method), req, res, params);
    }

}