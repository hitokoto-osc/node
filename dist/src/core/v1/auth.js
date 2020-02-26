"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const request_1 = require("./request");
class AuthApi {
    constructor() {
        this.request = new request_1.ApiRequest();
        this.isValid = false;
    }
    async login(email, password) {
        const data = await this.request.post('/auth/login', {
            email,
            password
        });
        request_1.checkStatusCode(data);
        this.isValid = true;
        return data.data[0];
    }
    async register(name, email, password) {
        const data = await this.request.post('/auth/register', {
            name,
            email,
            password
        });
        request_1.checkStatusCode(data);
        return data.data[0];
    }
    async passwordReset(email) {
        const data = await this.request.post('/auth/password/reset', {
            email
        });
        request_1.checkStatusCode(data);
    }
}
exports.AuthApi = AuthApi;
//# sourceMappingURL=auth.js.map