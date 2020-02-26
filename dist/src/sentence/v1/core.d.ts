export interface sentenceApiResponse {
    id: number;
    hitokoto: string;
    type: string;
    from: string;
    from_who: string | null;
    creator: string;
    creator_uid: number;
    reviewer: number;
    uuid: string;
    created_at: number;
}
export declare function getSentence(categroy?: string[] | string): Promise<sentenceApiResponse>;
//# sourceMappingURL=core.d.ts.map