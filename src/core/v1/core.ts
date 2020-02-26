/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import { ApiRequest, ResponseStruct } from './request'
import { AuthApi, LoginApi, RegisterApi } from './auth'
export interface UserApi {
  id: number;
  name: string;
  email: string;
  is_suspended: number;
  is_admin: number;
  is_reviewer: number;
  email_verified_at: string;
  created_from: string;
  created_at: string;
  updated_at: string;
}

export class CoreApi {
  request = new ApiRequest()
  isValid = false

  /**
   * 创建接口 SDK
   * @param {string} [token] 令牌
   * @returns {ApiRequest}
   */
  constructor (token?: string) {
    if (token) {
      if (token.length !== 40) {
        throw new Error('令牌的长度不正确')
      }
      this.request.Token = token
    }
  }

  /**
   * 检验 Token 是否有效，如果有效才能进行其他的接口请求
   * @returns {Promise<boolean>}
   */
  async verifyToken () {
    if (!this.request.Token) {
      return false
    } else if (this.request.Token.length !== 40) {
      return false
    }
    const data: ResponseStruct<UserApi> = await this.request.get('/user')
    if (data.status === 200) {
      this.isValid = true
    }
    return data.status === 200
  }

  /**
   * 获得令牌
   * @returns {string} 令牌
   */
  get token () {
    return this.request.Token
  }

  /**
   * 设置令牌
   * @param {string} token
   */
  set token (token: string) {
    if (token && token.length === 40) {
      this.request.Token = token
    } else {
      throw new Error('令牌长度不正确')
    }
  }
}

export interface CoreApi extends AuthApi {}
applyMixins(CoreApi, [AuthApi])

function applyMixins (derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      const value = Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
      if (value) {
        Object.defineProperty(derivedCtor.prototype, name, value)
      }
    })
  })
}
