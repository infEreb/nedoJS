class User {
    constructor(id, name) {
        this._id = id;
        this._name = name;
    }

    getId() {
        return this._id;
    }

    getName() {
        return this._name;
    }
}

class Users {
    constructor() {
        this._count = 0;
        this._ids = 0;
        this._users = new Map();
    }
    // returns JSON format
    get(id) {
        id = parseInt(id);
        if(this.has(id)) {
            return this._users.get(id);
        } else {
            return {};
        }
    }
    // returns JSON format
    getAll() {
        return Object.fromEntries(this._users);
    }
    // add new user with info (name)
    add(name) {
        if(name == "") {
            return;
        }
        this._count++;
        this._users.set(this._ids, new User(this._ids, name));
        this._ids++;
        //this._users[this._ids]['info'] = info;
    }
    delete(id) {
        id = parseInt(id);
        if(this.has(id)) {
            this._users.delete(id);
            this._count--;
        }
    }
    has(id) {
        return this._users.has(id);
    }
}

export { Users }