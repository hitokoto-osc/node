export interface ResponseStruct<T> {
    status: number;
    message: string;
    data: T[];
    ts: number;
}
export interface Params<T> {
    [index: string]: T;
}
export declare class ApiRequest {
    token?: string;
    endpoint: string;
    /**
     * 创建请求
     * @param {string} [token] 令牌
     * @returns {ApiRequest}
     */
    constructor(token?: string);
    /**
     * 发起 GET 请求
     * @param {string} path API 路径
     * @param {object} [query] 请求参数
     * @returns {Promise<ResponseStruct<any>>}
     */
    get(path: string, query?: Params<any>): Promise<ResponseStruct<any>>;
    /**
     * 发起 POST 请求
     * @param {string} path API 路径
     * @param {object} [formParams] 表单参数
     * @param {object} [query] 请求参数
     * @returns {Promise<ResponseStruct<any>>}
     */
    post(path: string, formParams?: Params<any>, query?: Params<any>): Promise<ResponseStruct<any>>;
    /**
     * 发起 PUT 请求
     * @param {string} path API 路径
     * @param {object} [formParams] 表单参数
     * @param {object} [query] 请求参数
     * @returns {Promise<ResponseStruct<any>>}
     */
    put(path: string, formParams?: Params<any>, query?: Params<any>): Promise<ResponseStruct<any>>;
    /**
     * 获得令牌
     * @returns {string} 令牌
     */
    get Token(): string;
    /**
     * 设置令牌
     * @param {string} token
     */
    set Token(token: string);
}
export declare function checkStatusCode(responseData: ResponseStruct<any>): void;
//# sourceMappingURL=request.d.ts.map