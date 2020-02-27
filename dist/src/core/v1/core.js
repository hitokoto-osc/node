"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const request_1 = require("./request");
const auth_1 = require("./auth");
const sentence_1 = require("./sentence");
const like_1 = require("./like");
const user_1 = require("./user");
class CoreApi {
    /**
     * 创建接口 SDK
     * @param {string} [token] 令牌
     * @returns {ApiRequest}
     */
    constructor(token) {
        this.request = new request_1.ApiRequest();
        if (token) {
            if (token.length !== 40) {
                throw new Error('令牌的长度不正确');
            }
            this.request.token = token;
        }
    }
    /**
     * 检验 Token 是否有效，如果有效才能进行其他的接口请求
     * @returns {Promise<CoreApi>}
     */
    async verifyToken() {
        if (!this.request.token) {
            throw new Error('令牌无效');
        }
        else if (this.request.token.length !== 40) {
            throw new Error('令牌长度不符合');
        }
        const data = await this.request.get('/user');
        request_1.checkStatusCode(data);
        this.request.isValid = true;
        return this;
    }
    /**
     * 获得令牌
     * @returns {string} 令牌
     */
    get token() {
        return this.request.token;
    }
    /**
     * 设置令牌
     * @param {string} token
     */
    set token(token) {
        if (token && token.length === 40) {
            this.request.token = token;
            this.request.isValid = false;
        }
        else {
            throw new Error('令牌长度不正确');
        }
    }
}
exports.CoreApi = CoreApi;
applyMixins(CoreApi, [auth_1.AuthApi, user_1.UserApi, like_1.LikeApi, sentence_1.SentenceApi]);
/**
 * 应用 Mixins
 * 来自：https://www.typescriptlang.org/docs/handbook/mixins.html
 * @param derivedCtor
 * @param baseCtors
 */
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            const value = Object.getOwnPropertyDescriptor(baseCtor.prototype, name);
            if (value) {
                Object.defineProperty(derivedCtor.prototype, name, value);
            }
        });
    });
}
