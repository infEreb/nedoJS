import { URLSearchParams } from 'url'

class Endpoint {
    constructor(endpoint) {
        this._endpoint = endpoint;
        // {method: handler}
        this._methods = {};
        // { method: [params] }
        this._params = {};
    }
    
    add(method, handler) {
        if (this._methods[method]) {
            return true;
        }
        this._methods[method] = handler;
        // this.#emitter.on(`${endpoint}:${method}`, handler);
        return false;
    }
    addGet(handler) {
        return this.add('GET', handler);
    }
    addPost(handler) {
        return this.add('POST', handler);
    }
    addPut(handler) {
        return this.add('PUT', handler);
    }
    addDelete(handler) {
        return this.add('DELETE', handler);
    }
    
    addParam(method, param) {
        if(!this._params[method]) {
            this._params[method] = new Array();
            this._params[method].push(param);
        }

        return false;
    }
    addGetParam(param) {
        return this.addParam('GET', param);
    }
    addPostParam(param) {
        return this.addParam('POST', param);
    }
    addPutParam(param) {
        return this.addParam('PUT', param);
    }
    addDeleteParam(param) {
        return this.addParam('DELETE', param);
    }
    
    // [param1, param2, ...]
    // or 
    // {'GET': [param1, param2], 'POST': [param1, param2], ...}
    getParams(method) {
        if(typeof method !== 'undefined') {
            return this._params[method];
        }
        return this._params;
    }

    hasParam(method, param) {
        if(this._params[method]) {
            if(this._params[method].includes(param)) {
                return true;
            }
        }
        return false;
    }
    // parse params for this endpoint
    parseParams(method, params) {
        let successful = true;
        // for every param of this endpoint
        // checks existing in 'params'
        this._params[method].forEach(param => {
            if(!params.has(param)) {
                successful = false;
                return
            }
        });

        return successful;
    }

    // 'endpoint'
    getEndpoint() {
        return this._endpoint;
    }

    // {'GET': handle, 'POST': handle, ...}
    getMethods() {
        return this._methods;
    }
    
    // ['GET', 'POST', ...]
    getAvailableMethods() {
        return Object.keys(this.methods);
    }

    // 'endpoint:METHOD'
    getMask(method) {
        return `${this.endpoint}:${method}`;
    }
}

export { Endpoint }