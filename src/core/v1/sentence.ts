/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import {
  ApiRequest,
  BaseData,
  ResponseStruct,
  checkStatusCode,
} from './request'
import { checkValid } from './decorator'

export interface AppendSentenceApi extends BaseData {
  uuid: string
  hitokoto: string
  type: string
  from: string
  from_who: string
  creator: string
  creator_uid: number
  commit_from: string
  created_at: string
  id: number
}

export interface CommonSentence extends BaseData {
  hitokoto: string
  uuid: string
  type: string
  from: string
  from_who: string | null
  creator: string
  creator_uid: number
  reviewer: number
  commit_from: string
  created_at: string
  status: string
}

export interface SubmitSentenceScoreApi extends BaseData {
  score: string
  comment: string
  sentence_uuid: string
  sentence_score: Sentencescore
}

interface Sentencescore {
  total: number
  participants: number
  average: number
}

export interface GetSentenceScoreApi extends BaseData {
  id: number
  sentence_uuid: string
  score: Score
  logs: Log[]
  updated_at: string
  created_at: string
}

interface Log {
  id: number
  sentence_uuid: string
  user_id: number
  score: number
  comment: string
  updated_at: string
  created_at: string
}

interface Score {
  total: number
  participants: number
  average: number
}

export interface ReportSentenceApi extends BaseData {
  sentence_uuid: string
  user_id: number
  comment: string
  updated_at: string
  created_at: string
  id: number
}

export interface AppendSentenceParams {
  hitokoto: string
  from: string
  fromWho?: string
  type: string
  [index: string]: unknown
}

const request = new ApiRequest()

export class SentenceApi {
  @checkValid()
  async getSentence(sentenceUuid: string): Promise<CommonSentence> {
    const data: ResponseStruct<CommonSentence> = await request.get(
      '/hitokoto/' + sentenceUuid,
    )
    checkStatusCode(data)
    return data.data[0]
  }

  @checkValid()
  async appendSentence(
    params: AppendSentenceParams,
  ): Promise<AppendSentenceApi> {
    const data: ResponseStruct<AppendSentenceApi> = await request.post(
      '/hitokoto/append',
      params,
    )
    checkStatusCode(data)
    return data.data[0]
  }

  @checkValid()
  async submitSentenceScore(
    sentenceUuid: string,
    score: number,
    comment?: string,
  ): Promise<SubmitSentenceScoreApi> {
    const data: ResponseStruct<SubmitSentenceScoreApi> = await request.post(
      '/hitokoto/' + sentenceUuid + '/score',
      {
        score,
        comment,
      },
    )
    checkStatusCode(data)
    return data.data[0]
  }

  @checkValid()
  async getSentenceScore(sentenceUuid: string): Promise<GetSentenceScoreApi> {
    const data: ResponseStruct<GetSentenceScoreApi> = await request.get(
      '/hitokoto/' + sentenceUuid + '/score',
    )
    checkStatusCode(data)
    return data.data[0]
  }

  @checkValid()
  async reportSentence(
    sentenceUuid: string,
    comment: string,
  ): Promise<ReportSentenceApi> {
    const data: ResponseStruct<ReportSentenceApi> = await request.post(
      '/hitokoto/' + sentenceUuid + '/report',
      {
        comment,
      },
    )
    checkStatusCode(data)
    return data.data[0]
  }
}
