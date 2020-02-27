"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const query_string_1 = __importDefault(require("query-string"));
const form_data_1 = __importDefault(require("form-data"));
exports.Token = '';
// eslint-disable-next-line prefer-const
exports.IsValid = false;
class ApiRequest {
    constructor() {
        this.endpoint = 'https://hitokoto.cn/api/restful/v1';
    }
    /**
     * 发起 GET 请求
     * @param {string} path API 路径
     * @param {object} [query] 请求参数
     * @returns {Promise<ResponseStruct<any>>}
     */
    async get(path, query) {
        const headers = {
            Accept: 'application/json' // 要求接口一定返回 JSON 对象
        };
        if (this.token) {
            headers.Authorization = 'Bearer ' + this.token;
        }
        const response = await node_fetch_1.default(this.endpoint + path + '?' + (query ? query_string_1.default.stringify(query) : ''), {
            headers
        });
        if (response.status !== 200) {
            throw new Error('无法成功请求，HTTP 状态码: ' + response.status);
        }
        try {
            const data = await response.json();
            return data;
        }
        catch (e) {
            throw new Error('无法解析响应');
        }
    }
    /**
     * 发起 POST 请求
     * @param {string} path API 路径
     * @param {object} [formParams] 表单参数
     * @param {object} [query] 请求参数
     * @returns {Promise<ResponseStruct<any>>}
     */
    async post(path, formParams, query) {
        const headers = {
            Accept: 'application/json' // 要求接口一定要返回 JSON
        };
        if (this.token) {
            headers.Authorization = 'Bearer ' + this.token;
        }
        // 生成 Post 参数
        const formData = new form_data_1.default();
        if (formParams) {
            for (const param in formParams) {
                formData.append(param, formParams[param]);
            }
        }
        const response = await node_fetch_1.default(this.endpoint + path + '?' + (query ? query_string_1.default.stringify(query) : ''), {
            headers,
            body: formData,
            method: 'POST'
        });
        if (response.status !== 200) {
            throw new Error('无法成功请求，HTTP 状态码: ' + status);
        }
        try {
            const data = await response.json();
            return data;
        }
        catch (e) {
            throw new Error('无法解析响应');
        }
    }
    /**
     * 发起 PUT 请求
     * @param {string} path API 路径
     * @param {object} [formParams] 表单参数
     * @param {object} [query] 请求参数
     * @returns {Promise<ResponseStruct<any>>}
     */
    async put(path, formParams, query) {
        const headers = {
            Accept: 'application/json' // 要求接口一定要返回 JSON
        };
        if (this.token) {
            headers.Authorization = 'Bearer ' + this.token;
        }
        // 生成 Post 参数
        const formData = new form_data_1.default();
        formData.append('_method', 'PUT'); // 使用 _method 键模拟 PUT 请求
        if (formParams) {
            for (const param in formParams) {
                formData.append(param, formParams[param]);
            }
        }
        const response = await node_fetch_1.default(this.endpoint + path + '?' + (query ? query_string_1.default.stringify(query) : ''), {
            headers,
            body: formData,
            method: 'POST'
        });
        if (response.status !== 200) {
            throw new Error('无法成功请求，HTTP 状态码: ' + response.status);
        }
        try {
            const data = await response.json();
            return data;
        }
        catch (e) {
            throw new Error('无法解析响应');
        }
    }
    /**
     * 获得令牌
     * @returns {string} 令牌
     */
    get token() {
        return exports.Token || '';
    }
    /**
     * 设置令牌
     * @param {string} token
     */
    set token(token) {
        if (token && token.length === 40) {
            exports.Token = token;
        }
    }
    /**
     * 获得令牌
     * @returns {boolean} 令牌
     */
    get isValid() {
        return exports.IsValid;
    }
    /**
     * 设置令牌
     * @param {string} token
     */
    set isValid(isValid) {
        exports.IsValid = isValid;
    }
}
exports.ApiRequest = ApiRequest;
function checkStatusCode(responseData) {
    if (responseData.status !== 200) {
        if (responseData.status === 400) {
            console.error(responseData.data[0].validator);
        }
        throw new Error('请求时发生错误，错误代码：' + responseData.status + '，错误信息：' + responseData.message);
    }
}
exports.checkStatusCode = checkStatusCode;
//# sourceMappingURL=request.js.map