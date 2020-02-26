/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import { ApiRequest, ResponseStruct, checkStatusCode } from './request'
import { checkValid } from './decorator'

export interface GetSentenceLikeApi {
  sets: Set[]
  total: number
}

interface Set {
  user_id: number
  created_time: string
}

export interface LikeSentenceApi {
  ip: string
  user_id: number
}

export class LikeApi {
  request = new ApiRequest()
  isValid = false

  async getSentenceLike (sentenceUuid: string): Promise<GetSentenceLikeApi> {
    const data: ResponseStruct<GetSentenceLikeApi> = await this.request.get('/like', {
      sentence_uuid: sentenceUuid
    })
    checkStatusCode(data)
    return data.data[0]
  }

  async likeSentence (sentenceUuid: string): Promise<LikeSentenceApi> {
    const data: ResponseStruct<LikeSentenceApi> = await this.request.post('/like', {
      sentence_uuid: sentenceUuid
    })
    checkStatusCode(data)
    return data.data[0]
  }

  @checkValid()
  async cancalSentenceLike (sentenceUuid: string): Promise<void> {
    const data: ResponseStruct<void> = await this.request.post('/like', {
      sentence_uuid: sentenceUuid
    })
    checkStatusCode(data)
  }
}
