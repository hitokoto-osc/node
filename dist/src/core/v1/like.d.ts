import { BaseData } from './request';
export interface GetSentenceLikeApi extends BaseData {
    sets: Set[];
    total: number;
}
interface Set {
    user_id: number;
    created_time: string;
}
export interface LikeSentenceApi extends BaseData {
    ip: string;
    user_id: number;
}
export declare class LikeApi {
    getSentenceLike(sentenceUuid: string): Promise<GetSentenceLikeApi>;
    likeSentence(sentenceUuid: string): Promise<LikeSentenceApi>;
    cancalSentenceLike(sentenceUuid: string): Promise<void>;
}
export {};
