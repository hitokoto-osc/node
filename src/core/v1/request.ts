import fetch from 'node-fetch'
import qs from 'query-string'
import FormData from 'form-data'

export interface ResponseStruct<T> {
  status: number
  message: string
  data: T[]
  ts: number
}

export interface BaseData {
  validator?: { [index: string]: string[] }
  [index: string]: unknown
}

export let Token = ''
// eslint-disable-next-line prefer-const
export let IsValid = false

export interface Params<T> {
  [index: string]: T
}

export class ApiRequest {
  endpoint = 'https://hitokoto.cn/api/restful/v1'

  /**
   * 发起 GET 请求
   * @param {string} path API 路径
   * @param {object} [query] 请求参数
   * @returns {Promise<ResponseStruct<any>>}
   */
  async get(
    path: string,
    query?: Params<unknown>,
  ): Promise<ResponseStruct<never>> {
    const headers: { [index: string]: string } = {
      Accept: 'application/json', // 要求接口一定返回 JSON 对象
    }

    if (this.token) {
      headers.Authorization = 'Bearer ' + this.token
    }

    const response = await fetch(
      this.endpoint + path + '?' + (query ? qs.stringify(query) : ''),
      {
        headers,
      },
    )
    if (response.status !== 200) {
      throw new Error('无法成功请求，HTTP 状态码: ' + response.status)
    }
    try {
      const data = await response.json()
      return data
    } catch (e) {
      throw new Error('无法解析响应')
    }
  }

  /**
   * 发起 POST 请求
   * @param {string} path API 路径
   * @param {object} [formParams] 表单参数
   * @param {object} [query] 请求参数
   * @returns {Promise<ResponseStruct<any>>}
   */
  async post(
    path: string,
    formParams?: Params<unknown>,
    query?: Params<unknown>,
  ): Promise<ResponseStruct<never>> {
    const headers: Params<string> = {
      Accept: 'application/json', // 要求接口一定要返回 JSON
    }

    if (this.token) {
      headers.Authorization = 'Bearer ' + this.token
    }
    // 生成 Post 参数
    const formData = new FormData()
    if (formParams) {
      for (const param in formParams) {
        formData.append(param, formParams[param])
      }
    }
    const response = await fetch(
      this.endpoint + path + '?' + (query ? qs.stringify(query) : ''),
      {
        headers,
        body: formData,
        method: 'POST',
      },
    )
    if (response.status !== 200) {
      throw new Error('无法成功请求，HTTP 状态码: ' + status)
    }
    try {
      const data = await response.json()
      return data
    } catch (e) {
      throw new Error('无法解析响应')
    }
  }

  /**
   * 发起 PUT 请求
   * @param {string} path API 路径
   * @param {object} [formParams] 表单参数
   * @param {object} [query] 请求参数
   * @returns {Promise<ResponseStruct<any>>}
   */
  async put(
    path: string,
    formParams?: Params<unknown>,
    query?: Params<unknown>,
  ): Promise<ResponseStruct<never>> {
    const headers: Params<string> = {
      Accept: 'application/json', // 要求接口一定要返回 JSON
    }

    if (this.token) {
      headers.Authorization = 'Bearer ' + this.token
    }
    // 生成 Post 参数
    const formData = new FormData()
    formData.append('_method', 'PUT') // 使用 _method 键模拟 PUT 请求
    if (formParams) {
      for (const param in formParams) {
        formData.append(param, formParams[param])
      }
    }
    const response = await fetch(
      this.endpoint + path + '?' + (query ? qs.stringify(query) : ''),
      {
        headers,
        body: formData,
        method: 'POST',
      },
    )
    if (response.status !== 200) {
      throw new Error('无法成功请求，HTTP 状态码: ' + response.status)
    }
    try {
      const data = await response.json()
      return data
    } catch (e) {
      throw new Error('无法解析响应')
    }
  }

  /**
   * 获得令牌
   * @returns {string} 令牌
   */
  get token(): string {
    return Token || ''
  }

  /**
   * 设置令牌
   * @param {string} token
   */
  set token(token: string) {
    if (token && token.length === 40) {
      Token = token
    }
  }

  /**
   * 获得令牌
   * @returns {boolean} 令牌
   */
  get isValid(): boolean {
    return IsValid
  }

  /**
   * 设置令牌
   * @param {string} token
   */
  set isValid(isValid: boolean) {
    IsValid = isValid
  }
}

export function checkStatusCode(responseData: ResponseStruct<BaseData>): void {
  if (responseData.status !== 200) {
    if (responseData.status === 400) {
      console.error(responseData.data[0].validator)
    }
    throw new Error(
      '请求时发生错误，错误代码：' +
        responseData.status +
        '，错误信息：' +
        responseData.message,
    )
  }
}
