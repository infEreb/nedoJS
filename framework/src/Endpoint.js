module.exports = class Endpoint {
    constructor(endpoint) {
        this._endpoint = endpoint;
        this._methods = {};
        this._parapms = new Map()
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