/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import {
  ResponseStruct,
  ApiRequest,
  checkStatusCode,
  BaseData,
} from './request'

export interface LoginApi extends BaseData {
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
  token: string
}

export interface RegisterApi extends BaseData {
  id: number
  name: string
  email: string
  token: string
  email_verified_at?: number
  created_at: string
  updated_at: string
}
const request = new ApiRequest()

export class AuthApi {
  async login(email: string, password: string): Promise<LoginApi> {
    const data: ResponseStruct<LoginApi> = await request.post('/auth/login', {
      email,
      password,
    })
    checkStatusCode(data)
    request.isValid = true
    return data.data[0]
  }

  async register(
    name: string,
    email: string,
    password: string,
  ): Promise<RegisterApi> {
    const data: ResponseStruct<RegisterApi> = await request.post(
      '/auth/register',
      {
        name,
        email,
        password,
      },
    )
    checkStatusCode(data)
    return data.data[0]
  }

  async passwordReset(email: string): Promise<void> {
    const data: ResponseStruct<Record<string, unknown>> = await request.post(
      '/auth/password/reset',
      {
        email,
      },
    )
    checkStatusCode(data)
  }

  /**
   * 获得令牌
   * @returns {string} 令牌
   */
  get Token(): string {
    return request.token || ''
  }

  /**
   * 设置令牌
   * @param {string} token
   */
  set Token(token: string) {
    if (token && token.length === 40) {
      request.token = token
    }
  }
}
