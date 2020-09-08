"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSentence = void 0;
/* eslint-disable camelcase */
const node_fetch_1 = __importDefault(require("node-fetch"));
async function getSentence(categroy) {
    let qs = '';
    if (!categroy) {
        qs = '';
    }
    else if (Array.isArray(categroy)) {
        qs = '?c=' + categroy.join('&c=');
    }
    else {
        qs = '?c=' + categroy;
    }
    const response = await node_fetch_1.default('https://v1.hitokoto.cn/' + qs);
    if (response.status !== 200) {
        throw new Error('无法成功请求，HTTP 状态码: ' + response.status);
    }
    try {
        const data = await response.json();
        data.created_at = Number.parseInt(data.created_at + '000'); // 转换成 JavaScript 毫秒时间戳
        return data;
    }
    catch (e) {
        throw new Error('接口返回数据错误，请联系管理员。');
    }
}
exports.getSentence = getSentence;
