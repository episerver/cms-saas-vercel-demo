import * as ClientApi from '../../client-types';
export declare class DataPlatformService implements ClientApi.OptimizelyOneService<ClientApi.OptimizelyDataPlatformApi> {
    order: Readonly<number>;
    code: Readonly<string>;
    debug: boolean;
    get isActive(): boolean;
    trackPage(): void;
    trackEvent(event: ClientApi.OptimizelyOneEvent): void;
    getBrowserApi(): ClientApi.OptimizelyDataPlatformApi | undefined;
    private lastTrackedContentIntelligenceId;
    private get contentIntelligenceId();
    private _contentIntelligenceId;
}
export default DataPlatformService;
