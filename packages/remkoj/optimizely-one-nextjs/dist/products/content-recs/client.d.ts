import * as ClientApi from '../../client-types';
export declare class ContentRecsService implements ClientApi.OptimizelyOneService<ClientApi.OptimizelyContentRecsApi> {
    order: Readonly<number>;
    code: Readonly<string>;
    debug: boolean;
    get isActive(): boolean;
    trackPage(): void;
    getBrowserApi(): ClientApi.OptimizelyContentRecsApi | undefined;
}
export default ContentRecsService;
