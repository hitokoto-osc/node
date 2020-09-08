/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import {
  ApiRequest,
  BaseData,
  ResponseStruct,
  checkStatusCode,
} from './request'
import { checkValid } from './decorator'

export interface GetSentenceLikeApi extends BaseData {
  sets: Set[]
  total: number
}

interface Set {
  user_id: number
  created_time: string
}

export interface LikeSentenceApi extends BaseData {
  ip: string
  user_id: number
}

const request = new ApiRequest()

export class LikeApi {
  async getSentenceLike(sentenceUuid: string): Promise<GetSentenceLikeApi> {
    const data: ResponseStruct<GetSentenceLikeApi> = await request.get(
      '/like',
      {
        sentence_uuid: sentenceUuid,
      },
    )
    checkStatusCode(data)
    return data.data[0]
  }

  async likeSentence(sentenceUuid: string): Promise<LikeSentenceApi> {
    const data: ResponseStruct<LikeSentenceApi> = await request.post('/like', {
      sentence_uuid: sentenceUuid,
    })
    checkStatusCode(data)
    return data.data[0]
  }

  @checkValid()
  async cancalSentenceLike(sentenceUuid: string): Promise<void> {
    const data: ResponseStruct<Record<string, unknown>> = await request.post(
      '/like',
      {
        sentence_uuid: sentenceUuid,
      },
    )
    checkStatusCode(data)
  }
}
