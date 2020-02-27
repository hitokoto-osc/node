"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const request_1 = require("./request");
const decorator_1 = require("./decorator");
const request = new request_1.ApiRequest();
class SentenceApi {
    async getSentence(sentenceUuid) {
        const data = await request.get('/hitokoto/' + sentenceUuid);
        request_1.checkStatusCode(data);
        return data.data[0];
    }
    async appendSentence(params) {
        const data = await request.post('/hitokoto/append', params);
        request_1.checkStatusCode(data);
        return data.data[0];
    }
    async submitSentenceScore(sentenceUuid, score, comment) {
        const data = await request.post('/hitokoto/' + sentenceUuid + '/score', {
            score,
            comment
        });
        request_1.checkStatusCode(data);
        return data.data[0];
    }
    async getSentenceScore(sentenceUuid) {
        const data = await request.get('/hitokoto/' + sentenceUuid + '/score');
        request_1.checkStatusCode(data);
        return data.data[0];
    }
    async reportSentence(sentenceUuid, comment) {
        const data = await request.post('/hitokoto/' + sentenceUuid + '/report', {
            comment
        });
        request_1.checkStatusCode(data);
        return data.data[0];
    }
}
__decorate([
    decorator_1.checkValid(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SentenceApi.prototype, "getSentence", null);
__decorate([
    decorator_1.checkValid(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SentenceApi.prototype, "appendSentence", null);
__decorate([
    decorator_1.checkValid(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String]),
    __metadata("design:returntype", Promise)
], SentenceApi.prototype, "submitSentenceScore", null);
__decorate([
    decorator_1.checkValid(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SentenceApi.prototype, "getSentenceScore", null);
__decorate([
    decorator_1.checkValid(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], SentenceApi.prototype, "reportSentence", null);
exports.SentenceApi = SentenceApi;
//# sourceMappingURL=sentence.js.map