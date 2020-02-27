import { sentenceApiResponse } from './src/sentence/v1/core';
import { CoreApi as CoreApiV1 } from './src/core/v1/core';
export { CoreApiV1 };
export interface SentenceApiV1 {
    getSentence(categroy?: string | string[] | undefined): Promise<sentenceApiResponse>;
}
export declare class SentenceApiV1 {
}
//# sourceMappingURL=core.d.ts.map