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
export declare class AuthApi {
    login(email: string, password: string): Promise<LoginApi>;
    register(name: string, email: string, password: string): Promise<RegisterApi>;
    passwordReset(email: string): Promise<void>;
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
