/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import {
  ApiRequest,
  ResponseStruct,
  checkStatusCode,
  BaseData,
} from './request'
import { checkValid } from './decorator'
import { CommonSentence } from './sentence'

export interface GetUserInformationApi extends BaseData {
  id: number
  name: string
  email: string
  is_suspended: number
  is_admin: number
  is_reviewer: number
  email_verified_at: string
  created_from: string
  created_at: string
  updated_at: string
}

export interface UserTokenApi extends BaseData {
  user: {
    id: number
    name: string
    email: string
    token: string
  }
}

export interface NotificationSettingsApi extends BaseData {
  id: number
  user_id: number
  email_notification_global: number
  email_notification_hitokoto_appended: number
  email_notification_hitokoto_reviewed: number
  email_notification_poll_created: number
  email_notification_poll_result: number
  email_notification_poll_daily_report: number
  updated_at: string
  created_at: string
}

export interface UserHitokotoLikeApi extends BaseData {
  statistics: {
    total: number
  }

  collection: Sentence[]
}

interface Sentence {
  uuid: string
  hitokoto: string
  type: string
  from: string
  from_who: string | null
  creator: string
  creator_uid: number
  reviewer: number
  commit_from: string
  created_at: string
}

export interface UserHitokotoHistoryOrSummary extends BaseData {
  statistics: HitokotoStatistics
  collections: CommonSentence[]
}

interface HitokotoStatistics {
  total: number
  pending: number
  refuse: number
  accept: number
}

export interface NotificationSettingsParams {
  email_global: boolean
  email_hitokoto_appended: boolean
  email_hitokoto_reviewed: boolean
  email_poll_created: boolean
  email_poll_result: boolean
  email_poll_report_daily: boolean
  [index: string]: boolean
}

const request = new ApiRequest()

export class UserApi {
  @checkValid()
  async getUserInformation(): Promise<GetUserInformationApi> {
    const data: ResponseStruct<GetUserInformationApi> = await request.get(
      '/user',
    )
    checkStatusCode(data)
    return data.data[0]
  }

  @checkValid()
  async getUserToken(): Promise<UserTokenApi> {
    const data: ResponseStruct<UserTokenApi> = await request.get('/user/token')
    checkStatusCode(data)
    return data.data[0]
  }

  @checkValid()
  async sendVerifyEmail(): Promise<void> {
    const data: ResponseStruct<Record<string, unknown>> = await request.post(
      '/user/email/verify',
    )
    checkStatusCode(data)
  }

  @checkValid()
  async changeUserPassword(
    password: string,
    newPassword: string,
  ): Promise<void> {
    const data: ResponseStruct<Record<string, unknown>> = await request.put(
      '/user/password',
      {
        password,
        new_password: newPassword,
      },
    )
    checkStatusCode(data)
  }

  @checkValid()
  async changeUserEmail(password: string, email: string): Promise<void> {
    const data: ResponseStruct<UserTokenApi> = await request.put(
      '/user/email',
      {
        email,
        password,
      },
    )
    checkStatusCode(data)
  }

  @checkValid()
  async getUserNotificationSettings(): Promise<NotificationSettingsApi> {
    const data: ResponseStruct<NotificationSettingsApi> = await request.get(
      '/user/notification/settings',
    )
    checkStatusCode(data)
    return data.data[0]
  }

  @checkValid()
  async setUserNotificationSettings(
    settings: NotificationSettingsParams,
  ): Promise<NotificationSettingsApi> {
    const data: ResponseStruct<NotificationSettingsApi> = await request.put(
      '/user/notification/settings',
      settings,
    )
    checkStatusCode(data)
    return data.data[0]
  }

  @checkValid()
  async getUserLikedSentences(): Promise<UserHitokotoLikeApi> {
    const data: ResponseStruct<UserHitokotoLikeApi> = await request.get(
      '/user/hitokoto/like',
    )
    checkStatusCode(data)
    return data.data[0]
  }

  @checkValid()
  async getUserHitokotoSummary(): Promise<UserHitokotoHistoryOrSummary> {
    const data: ResponseStruct<UserHitokotoHistoryOrSummary> = await request.get(
      '/user/hitokoto/summary',
    )
    checkStatusCode(data)
    return data.data[0]
  }

  @checkValid()
  async getUserHitokotoHistory(
    offset: 0,
    limit: 20,
  ): Promise<UserHitokotoHistoryOrSummary> {
    const data: ResponseStruct<UserHitokotoHistoryOrSummary> = await request.get(
      '/user/hitokoto/history',
      {
        limit,
        offset,
      },
    )
    checkStatusCode(data)
    return data.data[0]
  }

  @checkValid()
  async getUserHitokotoHistoryRufuse(
    offset: 0,
    limit: 20,
  ): Promise<UserHitokotoHistoryOrSummary> {
    const data: ResponseStruct<UserHitokotoHistoryOrSummary> = await request.get(
      '/user/hitokoto/history/refuse',
      {
        limit,
        offset,
      },
    )
    checkStatusCode(data)
    return data.data[0]
  }

  @checkValid()
  async getUserHitokotoHistoryPending(
    offset: 0,
    limit: 20,
  ): Promise<UserHitokotoHistoryOrSummary> {
    const data: ResponseStruct<UserHitokotoHistoryOrSummary> = await request.get(
      '/user/hitokoto/history/pending',
      {
        limit,
        offset,
      },
    )
    checkStatusCode(data)
    return data.data[0]
  }

  @checkValid()
  async getUserHitokotoHistoryAccept(
    offset: 0,
    limit: 20,
  ): Promise<UserHitokotoHistoryOrSummary> {
    const data: ResponseStruct<UserHitokotoHistoryOrSummary> = await request.get(
      '/user/hitokoto/history/accept',
      {
        limit,
        offset,
      },
    )
    checkStatusCode(data)
    return data.data[0]
  }
}
