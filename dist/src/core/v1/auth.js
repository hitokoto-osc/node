"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthApi = void 0;
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const request_1 = require("./request");
const request = new request_1.ApiRequest();
class AuthApi {
    async login(email, password) {
        const data = await request.post('/auth/login', {
            email,
            password,
        });
        request_1.checkStatusCode(data);
        request.isValid = true;
        return data.data[0];
    }
    async register(name, email, password) {
        const data = await request.post('/auth/register', {
            name,
            email,
            password,
        });
        request_1.checkStatusCode(data);
        return data.data[0];
    }
    async passwordReset(email) {
        const data = await request.post('/auth/password/reset', {
            email,
        });
        request_1.checkStatusCode(data);
    }
    /**
     * 获得令牌
     * @returns {string} 令牌
     */
    get Token() {
        return request.token || '';
    }
    /**
     * 设置令牌
     * @param {string} token
     */
    set Token(token) {
        if (token && token.length === 40) {
            request.token = token;
        }
    }
}
exports.AuthApi = AuthApi;
