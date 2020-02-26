import got from 'got'
import qs from 'query-string'
import FormData from 'form-data'

export interface ResponseStruct<T> {
  status: number
  message: string,
  data: T[],
  ts: number
}

export interface Params<T> {
  [index: string]: T
}

export class ApiRequest {
  token?: string
  endpoint = 'https://hitokoto.cn/api/restful/v1'

  /**
   * 创建请求
   * @param {string} [token] 令牌
   * @returns {ApiRequest}
   */
  constructor (token?: string) {
    if (token) {
      if (token.length !== 40) {
        throw new Error('令牌的长度不正确')
      }
      this.token = token
    }
  }

  /**
   * 发起 GET 请求
   * @param {string} path API 路径
   * @param {object} [query] 请求参数
   * @returns {Promise<ResponseStruct<any>>}
   */
  async get (path: string, query?: Params<any>): Promise<ResponseStruct<any>> {
    const headers: any = {
      Accept: 'application/json' // 要求接口一定返回 JSON 对象
    }

    if (this.Token) {
      headers.Authorization = 'Bearer ' + this.Token
    }

    const { body, statusCode } = await got(this.endpoint + path, {
      headers,
      searchParams: query ? qs.stringify(query) : ''
    })
    if (statusCode !== 200) {
      throw new Error('无法成功请求，HTTP 状态码: ' + statusCode)
    }
    try {
      const data = JSON.parse(body)
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
  async post (path: string, formParams?: Params<any>, query?: Params<any>): Promise<ResponseStruct<any>> {
    const headers: any = {
      Accept: 'application/json', // 要求接口一定要返回 JSON
      'Content-Type': 'application/x-www-form-urlencoded' // 以表单方式提交
    }

    if (this.Token) {
      headers.Authorization = 'Bearer ' + this.Token
    }
    // 生成 Post 参数
    const formData = new FormData()
    if (formParams) {
      for (const param in formParams) {
        formData.append(param, formParams[param])
      }
    }
    const { body, statusCode } = await got.post(this.endpoint + path, {
      headers,
      body: formData,
      searchParams: query ? qs.stringify(query) : ''
    })
    if (statusCode !== 200) {
      throw new Error('无法成功请求，HTTP 状态码: ' + statusCode)
    }
    try {
      const data = JSON.parse(body)
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
  async put (path: string, formParams?: Params<any>, query?: Params<any>): Promise<ResponseStruct<any>> {
    const headers: any = {
      Accept: 'application/json', // 要求接口一定要返回 JSON
      'Content-Type': 'application/x-www-form-urlencoded' // 以表单方式提交
    }

    if (this.Token) {
      headers.Authorization = 'Bearer ' + this.Token
    }
    // 生成 Post 参数
    const formData = new FormData()
    formData.append('_method', 'PUT') // 使用 _method 键模拟 PUT 请求
    if (formParams) {
      for (const param in formParams) {
        formData.append(param, formParams[param])
      }
    }
    const { body, statusCode } = await got.post(this.endpoint + path, {
      headers,
      body: formData,
      searchParams: query ? qs.stringify(query) : ''
    })
    if (statusCode !== 200) {
      throw new Error('无法成功请求，HTTP 状态码: ' + statusCode)
    }
    try {
      const data = JSON.parse(body)
      return data
    } catch (e) {
      throw new Error('无法解析响应')
    }
  }

  /**
   * 获得令牌
   * @returns {string} 令牌
   */
  get Token (): string {
    return this.token || ''
  }

  /**
   * 设置令牌
   * @param {string} token
   */
  set Token (token: string) {
    if (token && token.length === 40) {
      this.token = token
    }
  }
}

export function checkStatusCode (responseData: ResponseStruct<any>) {
  if (responseData.status !== 200) {
    throw new Error('请求时发生错误，错误代码：' + responseData.status + '，错误信息：' + responseData.message)
  }
}
