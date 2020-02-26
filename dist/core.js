"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@App/sentence/v1/core");
const core_2 = require("@App/core/v1/core");
module.exports = {
    v1: {
        CoreApi: core_2.CoreApi,
        SentenceApi: {
            getSentence: core_1.getSentence
        }
    }
};
//# sourceMappingURL=core.js.map