import { ApiRequest } from './request';
import { AuthApi } from './auth';
import { SentenceApi } from './sentence';
import { LikeApi } from './like';
import { UserApi } from './user';
export declare class CoreApi {
    request: ApiRequest;
    /**
     * 创建接口 SDK
     * @param {string} [token] 令牌
     * @returns {ApiRequest}
     */
    constructor(token?: string);
    /**
     * 检验 Token 是否有效，如果有效才能进行其他的接口请求
     * @returns {Promise<CoreApi>}
     */
    verifyToken(): Promise<CoreApi>;
    /**
     * 获得令牌
     * @returns {string} 令牌
     */
    get token(): string;
    /**
     * 设置令牌
     * @param {string} token
     */
    set token(token: string);
}
export interface CoreApi extends AuthApi, UserApi, LikeApi, SentenceApi {
}
