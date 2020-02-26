"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable camelcase */
const got_1 = __importDefault(require("got"));
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
    const { body } = await got_1.default.get('https://v1.hitokoto.cn/' + qs);
    try {
        const data = JSON.parse(body);
        data.created_at = Number.parseInt(data.created_at + '000'); // 转换成 JavaScript 毫秒时间戳
        return data;
    }
    catch (e) {
        throw new Error('接口返回数据错误，请联系管理员。');
    }
}
exports.getSentence = getSentence;
//# sourceMappingURL=core.js.map