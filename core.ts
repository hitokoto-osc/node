/* eslint-disable no-unused-vars */
import { getSentence, sentenceApiResponse } from './src/sentence/v1/core'
import { CoreApi as CoreApiV1 } from './src/core/v1/core'

export { CoreApiV1 }

export interface SentenceApiV1 {
  getSentence(categroy?: string | string[] | undefined): Promise<sentenceApiResponse>
}

export class SentenceApiV1 {
}

SentenceApiV1.prototype.getSentence = getSentence
