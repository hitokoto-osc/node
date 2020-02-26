import got from 'got'

export interface sentenceApiResponse {
  id: number
  hitokoto: string
  type: string
  from: string
  from_who: string | null
  creator: string
  creator_uid: number
  reviewer: number
  uuid: string
  created_at: number
}


export async function getSentence (categroy: string[] | string | null = null): Promise<sentenceApiResponse> {
  let qs = ''
  if (!categroy) {
    qs = ''
  } else if (Array.isArray(categroy)) {
    qs = '?c=' + categroy.join('&c=')
  } else {
    qs = '?c=' + categroy
  }
  const { body } = await got.get('https://v1.hitokoto.cn/' + qs)
  try {
    const data = JSON.parse(body)
    data.created_at = Number.parseInt(data.created_at + '000') // 转换成 JavaScript 毫秒时间戳
    return data
  } catch (e) {
    throw new Error('接口返回数据错误，请联系管理员。')
  }
}
