import { ApiRequest } from './request';
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
    request: ApiRequest;
    isValid: boolean;
    login(email: string, password: string): Promise<LoginApi>;
    register(name: string, email: string, password: string): Promise<RegisterApi>;
    passwordReset(email: string): Promise<void>;
}
//# sourceMappingURL=auth.d.ts.map