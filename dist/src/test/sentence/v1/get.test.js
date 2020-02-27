"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@App/sentence/v1/core");
test('测试是否能正常获得一言语句', async () => {
    const sentence = await core_1.getSentence();
    expect(sentence.uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
});
