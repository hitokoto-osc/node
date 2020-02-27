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
class LikeApi {
    async getSentenceLike(sentenceUuid) {
        const data = await request.get('/like', {
            sentence_uuid: sentenceUuid
        });
        request_1.checkStatusCode(data);
        return data.data[0];
    }
    async likeSentence(sentenceUuid) {
        const data = await request.post('/like', {
            sentence_uuid: sentenceUuid
        });
        request_1.checkStatusCode(data);
        return data.data[0];
    }
    async cancalSentenceLike(sentenceUuid) {
        const data = await request.post('/like', {
            sentence_uuid: sentenceUuid
        });
        request_1.checkStatusCode(data);
    }
}
__decorate([
    decorator_1.checkValid(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LikeApi.prototype, "cancalSentenceLike", null);
exports.LikeApi = LikeApi;
