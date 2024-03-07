import * as ClientApi from '../../client-types';
export declare class WebExperimenationService implements ClientApi.OptimizelyOneService<ClientApi.OptimizelyWebExperimentationApi> {
    order: Readonly<number>;
    code: Readonly<string>;
    debug: boolean;
    get isActive(): boolean;
    activatePage(): void;
    trackEvent(event: ClientApi.OptimizelyOneEvent): void;
    getBrowserApi(): ClientApi.OptimizelyWebExperimentationApi | undefined;
}
export default WebExperimenationService;
