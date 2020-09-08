import { BaseData } from './request';
export interface AppendSentenceApi extends BaseData {
    uuid: string;
    hitokoto: string;
    type: string;
    from: string;
    from_who: string;
    creator: string;
    creator_uid: number;
    commit_from: string;
    created_at: string;
    id: number;
}
export interface CommonSentence extends BaseData {
    hitokoto: string;
    uuid: string;
    type: string;
    from: string;
    from_who: string | null;
    creator: string;
    creator_uid: number;
    reviewer: number;
    commit_from: string;
    created_at: string;
    status: string;
}
export interface SubmitSentenceScoreApi extends BaseData {
    score: string;
    comment: string;
    sentence_uuid: string;
    sentence_score: Sentencescore;
}
interface Sentencescore {
    total: number;
    participants: number;
    average: number;
}
export interface GetSentenceScoreApi extends BaseData {
    id: number;
    sentence_uuid: string;
    score: Score;
    logs: Log[];
    updated_at: string;
    created_at: string;
}
interface Log {
    id: number;
    sentence_uuid: string;
    user_id: number;
    score: number;
    comment: string;
    updated_at: string;
    created_at: string;
}
interface Score {
    total: number;
    participants: number;
    average: number;
}
export interface ReportSentenceApi extends BaseData {
    sentence_uuid: string;
    user_id: number;
    comment: string;
    updated_at: string;
    created_at: string;
    id: number;
}
export interface AppendSentenceParams {
    hitokoto: string;
    from: string;
    fromWho?: string;
    type: string;
    [index: string]: unknown;
}
export declare class SentenceApi {
    getSentence(sentenceUuid: string): Promise<CommonSentence>;
    appendSentence(params: AppendSentenceParams): Promise<AppendSentenceApi>;
    submitSentenceScore(sentenceUuid: string, score: number, comment?: string): Promise<SubmitSentenceScoreApi>;
    getSentenceScore(sentenceUuid: string): Promise<GetSentenceScoreApi>;
    reportSentence(sentenceUuid: string, comment: string): Promise<ReportSentenceApi>;
}
export {};
