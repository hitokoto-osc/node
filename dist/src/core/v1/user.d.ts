import { BaseData } from './request';
import { CommonSentence } from './sentence';
export interface GetUserInformationApi extends BaseData {
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
export interface UserTokenApi extends BaseData {
    user: {
        id: number;
        name: string;
        email: string;
        token: string;
    };
}
export interface NotificationSettingsApi extends BaseData {
    id: number;
    user_id: number;
    email_notification_global: number;
    email_notification_hitokoto_appended: number;
    email_notification_hitokoto_reviewed: number;
    email_notification_poll_created: number;
    email_notification_poll_result: number;
    email_notification_poll_daily_report: number;
    updated_at: string;
    created_at: string;
}
export interface UserHitokotoLikeApi extends BaseData {
    statistics: {
        total: number;
    };
    collection: Sentence[];
}
interface Sentence {
    uuid: string;
    hitokoto: string;
    type: string;
    from: string;
    from_who: string | null;
    creator: string;
    creator_uid: number;
    reviewer: number;
    commit_from: string;
    created_at: string;
}
export interface UserHitokotoHistoryOrSummary extends BaseData {
    statistics: HitokotoStatistics;
    collections: CommonSentence[];
}
interface HitokotoStatistics {
    total: number;
    pending: number;
    refuse: number;
    accept: number;
}
export interface NotificationSettingsParams {
    email_global: boolean;
    email_hitokoto_appended: boolean;
    email_hitokoto_reviewed: boolean;
    email_poll_created: boolean;
    email_poll_result: boolean;
    email_poll_report_daily: boolean;
    [index: string]: boolean;
}
export declare class UserApi {
    getUserInformation(): Promise<GetUserInformationApi>;
    getUserToken(): Promise<UserTokenApi>;
    sendVerifyEmail(): Promise<void>;
    changeUserPassword(password: string, newPassword: string): Promise<void>;
    changeUserEmail(password: string, email: string): Promise<void>;
    getUserNotificationSettings(): Promise<NotificationSettingsApi>;
    setUserNotificationSettings(settings: NotificationSettingsParams): Promise<NotificationSettingsApi>;
    getUserLikedSentences(): Promise<UserHitokotoLikeApi>;
    getUserHitokotoSummary(): Promise<UserHitokotoHistoryOrSummary>;
    getUserHitokotoHistory(offset: 0, limit: 20): Promise<UserHitokotoHistoryOrSummary>;
    getUserHitokotoHistoryRufuse(offset: 0, limit: 20): Promise<UserHitokotoHistoryOrSummary>;
    getUserHitokotoHistoryPending(offset: 0, limit: 20): Promise<UserHitokotoHistoryOrSummary>;
    getUserHitokotoHistoryAccept(offset: 0, limit: 20): Promise<UserHitokotoHistoryOrSummary>;
}
export {};
