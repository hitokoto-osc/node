export interface ResponseStruct<T> {
    status: number;
    message: string;
    data: T[];
    ts: number;
}
export declare let Token: string;
export declare let IsValid: boolean;
export interface Params<T> {
    [index: string]: T;
}
export declare class ApiRequest {
    endpoint: string;
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
    get token(): string;
    /**
     * 设置令牌
     * @param {string} token
     */
    set token(token: string);
    /**
     * 获得令牌
     * @returns {boolean} 令牌
     */
    get isValid(): boolean;
    /**
     * 设置令牌
     * @param {string} token
     */
    set isValid(isValid: boolean);
}
export declare function checkStatusCode(responseData: ResponseStruct<any>): void;
//# sourceMappingURL=request.d.ts.map