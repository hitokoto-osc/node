"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SentenceApiV1 = exports.CoreApiV1 = void 0;
/* eslint-disable no-unused-vars */
const core_1 = require("./src/sentence/v1/core");
const core_2 = require("./src/core/v1/core");
Object.defineProperty(exports, "CoreApiV1", { enumerable: true, get: function () { return core_2.CoreApi; } });
class SentenceApiV1 {
}
exports.SentenceApiV1 = SentenceApiV1;
SentenceApiV1.prototype.getSentence = core_1.getSentence;
