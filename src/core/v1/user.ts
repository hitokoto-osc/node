/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import { ApiRequest, ResponseStruct, checkStatusCode } from './request'
import { checkValid } from './decorator'
import { CommonSentence } from './sentence'

export interface GetUserInformationApi {
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

export interface UserTokenApi {
  user: TokenUser
}

interface TokenUser {
  id: number
  name: string
  email: string
  token: string
}

export interface NotificationSettingsApi {
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

export interface UserHitokotoLikeApi {
  statistics: UserHitokotoLikeStatistics
  collection: Sentence[]
}

interface Sentence {
  id: number
  uuid: string
  hitokoto: string
  type: string
  from: string
  from_who: string
  creator: string
  creator_uid: number
  reviewer: number
  commit_from: string
  assessor?: any
  owner: string
  created_at: string
}

interface UserHitokotoLikeStatistics {
  total: number
}

export interface UserHitokotoHistoryOrSummary {
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
}

export class UserApi {
  request = new ApiRequest()
  isValid = false

  @checkValid()
  async getUserInformation (): Promise<GetUserInformationApi> {
    const data: ResponseStruct<GetUserInformationApi> = await this.request.get('/user')
    checkStatusCode(data)
    return data.data[0]
  }

  @checkValid()
  async getUserToken (): Promise<UserTokenApi> {
    const data: ResponseStruct<UserTokenApi> = await this.request.get('/user/token')
    checkStatusCode(data)
    return data.data[0]
  }

  @checkValid()
  async sendVerifyEmail (): Promise<void> {
    const data: ResponseStruct<void> = await this.request.post('/user/email/verify')
    checkStatusCode(data)
  }

  @checkValid()
  async changeUserPassword (password: string, newPassword: string): Promise<void> {
    const data: ResponseStruct<void> = await this.request.put('/user/password', {
      password,
      new_password: newPassword
    })
    checkStatusCode(data)
  }

  @checkValid()
  async changeUserEmail (password: string, email: string): Promise<void> {
    const data: ResponseStruct<UserTokenApi> = await this.request.put('/user/email', {
      email,
      password
    })
    checkStatusCode(data)
  }

  @checkValid()
  async getUserNotificationSettings (): Promise<NotificationSettingsApi> {
    const data: ResponseStruct<NotificationSettingsApi> = await this.request.get('/user/notification/settings')
    checkStatusCode(data)
    return data.data[0]
  }

  @checkValid()
  async setUserNotificationSettings (settings: NotificationSettingsParams): Promise<NotificationSettingsApi> {
    const data: ResponseStruct<NotificationSettingsApi> = await this.request.put('/user/notification/settings', settings)
    checkStatusCode(data)
    return data.data[0]
  }

  @checkValid()
  async getUserLikedSentences (): Promise<UserHitokotoLikeApi> {
    const data: ResponseStruct<UserHitokotoLikeApi> = await this.request.get('/user/hitokoto/like')
    checkStatusCode(data)
    return data.data[0]
  }

  @checkValid()
  async getUserHitokotoSummary (): Promise<UserHitokotoHistoryOrSummary> {
    const data: ResponseStruct<UserHitokotoHistoryOrSummary> = await this.request.get('/user/hitokoto/summary')
    checkStatusCode(data)
    return data.data[0]
  }

  @checkValid()
  async getUserHitokotoHistory (offset: 0, limit: 20): Promise<UserHitokotoHistoryOrSummary> {
    const data: ResponseStruct<UserHitokotoHistoryOrSummary> = await this.request.get('/user/hitokoto/history', {
      limit,
      offset
    })
    checkStatusCode(data)
    return data.data[0]
  }

  @checkValid()
  async getUserHitokotoHistoryRufuse (offset: 0, limit: 20): Promise<UserHitokotoHistoryOrSummary> {
    const data: ResponseStruct<UserHitokotoHistoryOrSummary> = await this.request.get('/user/hitokoto/history/refuse', {
      limit,
      offset
    })
    checkStatusCode(data)
    return data.data[0]
  }

  @checkValid()
  async getUserHitokotoHistoryPending (offset: 0, limit: 20): Promise<UserHitokotoHistoryOrSummary> {
    const data: ResponseStruct<UserHitokotoHistoryOrSummary> = await this.request.get('/user/hitokoto/history/pending', {
      limit,
      offset
    })
    checkStatusCode(data)
    return data.data[0]
  }

  @checkValid()
  async getUserHitokotoHistoryAccept (offset: 0, limit: 20): Promise<UserHitokotoHistoryOrSummary> {
    const data: ResponseStruct<UserHitokotoHistoryOrSummary> = await this.request.get('/user/hitokoto/history/accept', {
      limit,
      offset
    })
    checkStatusCode(data)
    return data.data[0]
  }
}
