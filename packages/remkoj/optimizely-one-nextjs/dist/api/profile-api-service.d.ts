import type { ApiService } from './types';
export declare const ProfileApiService: ApiService<ProfileApiResponse>;
export default ProfileApiService;
export type ProfileApiResponse = {
    ids: {
        frontend: string;
        dataPlatform: string;
        contentIntelligence: string;
        webExperimentation: string;
    };
    contentTopics: string[];
    audiences: {
        id: string;
        name: string;
    }[];
    audiencesPageCount: number;
    audiencesCount: number;
    pageSize: number;
    pageNumber: number;
    duration?: string;
};
