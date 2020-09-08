"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkValid = void 0;
const request_1 = require("./request");
function checkValid() {
    return function (target, name, descriptor) {
        const method = descriptor.value;
        descriptor.value = function (...args) {
            // console.error(IsValid)
            if (!request_1.IsValid) {
                throw new Error('令牌为空或未经过验证');
                // console.error('令牌为空或未经过验证')
            }
            return method.apply(target, args);
        };
    };
}
exports.checkValid = checkValid;
