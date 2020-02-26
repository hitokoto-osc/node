/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import { ResponseStruct, ApiRequest, checkStatusCode } from './request'

export interface LoginApi {
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
  token: string;
}

export interface RegisterApi {
  id: number;
  name: string;
  email: string;
  token: string;
  email_verified_at?: any;
  created_at: string;
  updated_at: string;
}

export class AuthApi {
  request = new ApiRequest()
  isValid = false

  async login (email: string, password: string): Promise<LoginApi> {
    const data: ResponseStruct<LoginApi> = await this.request.post('/auth/login', {
      email,
      password
    })
    checkStatusCode(data)
    this.isValid = true
    return data.data[0]
  }

  async register (name: string, email: string, password: string): Promise<RegisterApi> {
    const data: ResponseStruct<RegisterApi> = await this.request.post('/auth/register', {
      name,
      email,
      password
    })
    checkStatusCode(data)
    return data.data[0]
  }

  async passwordReset (email: string): Promise<void> {
    const data: ResponseStruct<void> = await this.request.post('/auth/password/reset', {
      email
    })
    checkStatusCode(data)
  }
}
