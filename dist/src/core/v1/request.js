"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const got_1 = __importDefault(require("got"));
const query_string_1 = __importDefault(require("query-string"));
const form_data_1 = __importDefault(require("form-data"));
class ApiRequest {
    /**
     * 创建请求
     * @param {string} [token] 令牌
     * @returns {ApiRequest}
     */
    constructor(token) {
        this.endpoint = 'https://hitokoto.cn/api/restful/v1';
        if (token) {
            if (token.length !== 40) {
                throw new Error('令牌的长度不正确');
            }
            this.token = token;
        }
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
        if (this.Token) {
            headers.Authorization = 'Bearer ' + this.Token;
        }
        const { body, statusCode } = await got_1.default(this.endpoint + path, {
            headers,
            searchParams: query ? query_string_1.default.stringify(query) : ''
        });
        if (statusCode !== 200) {
            throw new Error('无法成功请求，HTTP 状态码: ' + statusCode);
        }
        try {
            const data = JSON.parse(body);
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
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded' // 以表单方式提交
        };
        if (this.Token) {
            headers.Authorization = 'Bearer ' + this.Token;
        }
        // 生成 Post 参数
        const formData = new form_data_1.default();
        if (formParams) {
            for (const param in formParams) {
                formData.append(param, formParams[param]);
            }
        }
        const { body, statusCode } = await got_1.default.post(this.endpoint + path, {
            headers,
            body: formData,
            searchParams: query ? query_string_1.default.stringify(query) : ''
        });
        if (statusCode !== 200) {
            throw new Error('无法成功请求，HTTP 状态码: ' + statusCode);
        }
        try {
            const data = JSON.parse(body);
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
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded' // 以表单方式提交
        };
        if (this.Token) {
            headers.Authorization = 'Bearer ' + this.Token;
        }
        // 生成 Post 参数
        const formData = new form_data_1.default();
        formData.append('_method', 'PUT'); // 使用 _method 键模拟 PUT 请求
        if (formParams) {
            for (const param in formParams) {
                formData.append(param, formParams[param]);
            }
        }
        const { body, statusCode } = await got_1.default.post(this.endpoint + path, {
            headers,
            body: formData,
            searchParams: query ? query_string_1.default.stringify(query) : ''
        });
        if (statusCode !== 200) {
            throw new Error('无法成功请求，HTTP 状态码: ' + statusCode);
        }
        try {
            const data = JSON.parse(body);
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
    get Token() {
        return this.token || '';
    }
    /**
     * 设置令牌
     * @param {string} token
     */
    set Token(token) {
        if (token && token.length === 40) {
            this.token = token;
        }
    }
}
exports.ApiRequest = ApiRequest;
function checkStatusCode(responseData) {
    if (responseData.status !== 200) {
        throw new Error('请求时发生错误，错误代码：' + responseData.status + '，错误信息：' + responseData.message);
    }
}
exports.checkStatusCode = checkStatusCode;
//# sourceMappingURL=request.js.map