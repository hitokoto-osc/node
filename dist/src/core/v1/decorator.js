"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkValid() {
    return function (target, name, descriptor) {
        if (!target.isValid) {
            throw new Error('令牌为空或未经过验证');
        }
    };
}
exports.checkValid = checkValid;
//# sourceMappingURL=decorator.js.map