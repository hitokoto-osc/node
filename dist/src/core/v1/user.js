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
class UserApi {
    constructor() {
        this.request = new request_1.ApiRequest();
        this.isValid = false;
    }
    async getUserInformation() {
        const data = await this.request.get('/user');
        request_1.checkStatusCode(data);
        return data.data[0];
    }
    async getUserToken() {
        const data = await this.request.get('/user/token');
        request_1.checkStatusCode(data);
        return data.data[0];
    }
    async sendVerifyEmail() {
        const data = await this.request.post('/user/email/verify');
        request_1.checkStatusCode(data);
    }
    async changeUserPassword(password, newPassword) {
        const data = await this.request.put('/user/password', {
            password,
            new_password: newPassword
        });
        request_1.checkStatusCode(data);
    }
    async changeUserEmail(password, email) {
        const data = await this.request.put('/user/email', {
            email,
            password
        });
        request_1.checkStatusCode(data);
    }
    async getUserNotificationSettings() {
        const data = await this.request.get('/user/notification/settings');
        request_1.checkStatusCode(data);
        return data.data[0];
    }
    async setUserNotificationSettings(settings) {
        const data = await this.request.put('/user/notification/settings', settings);
        request_1.checkStatusCode(data);
        return data.data[0];
    }
    async getUserLikedSentences() {
        const data = await this.request.get('/user/hitokoto/like');
        request_1.checkStatusCode(data);
        return data.data[0];
    }
    async getUserHitokotoSummary() {
        const data = await this.request.get('/user/hitokoto/summary');
        request_1.checkStatusCode(data);
        return data.data[0];
    }
    async getUserHitokotoHistory(offset, limit) {
        const data = await this.request.get('/user/hitokoto/history', {
            limit,
            offset
        });
        request_1.checkStatusCode(data);
        return data.data[0];
    }
    async getUserHitokotoHistoryRufuse(offset, limit) {
        const data = await this.request.get('/user/hitokoto/history/refuse', {
            limit,
            offset
        });
        request_1.checkStatusCode(data);
        return data.data[0];
    }
    async getUserHitokotoHistoryPending(offset, limit) {
        const data = await this.request.get('/user/hitokoto/history/pending', {
            limit,
            offset
        });
        request_1.checkStatusCode(data);
        return data.data[0];
    }
    async getUserHitokotoHistoryAccept(offset, limit) {
        const data = await this.request.get('/user/hitokoto/history/accept', {
            limit,
            offset
        });
        request_1.checkStatusCode(data);
        return data.data[0];
    }
}
__decorate([
    decorator_1.checkValid(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserApi.prototype, "getUserInformation", null);
__decorate([
    decorator_1.checkValid(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserApi.prototype, "getUserToken", null);
__decorate([
    decorator_1.checkValid(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserApi.prototype, "sendVerifyEmail", null);
__decorate([
    decorator_1.checkValid(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserApi.prototype, "changeUserPassword", null);
__decorate([
    decorator_1.checkValid(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserApi.prototype, "changeUserEmail", null);
__decorate([
    decorator_1.checkValid(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserApi.prototype, "getUserNotificationSettings", null);
__decorate([
    decorator_1.checkValid(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserApi.prototype, "setUserNotificationSettings", null);
__decorate([
    decorator_1.checkValid(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserApi.prototype, "getUserLikedSentences", null);
__decorate([
    decorator_1.checkValid(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserApi.prototype, "getUserHitokotoSummary", null);
__decorate([
    decorator_1.checkValid(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], UserApi.prototype, "getUserHitokotoHistory", null);
__decorate([
    decorator_1.checkValid(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], UserApi.prototype, "getUserHitokotoHistoryRufuse", null);
__decorate([
    decorator_1.checkValid(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], UserApi.prototype, "getUserHitokotoHistoryPending", null);
__decorate([
    decorator_1.checkValid(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], UserApi.prototype, "getUserHitokotoHistoryAccept", null);
exports.UserApi = UserApi;
//# sourceMappingURL=user.js.map