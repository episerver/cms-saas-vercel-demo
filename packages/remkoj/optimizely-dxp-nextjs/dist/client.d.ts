import 'server-only';
import { type IOptiGraphClient } from '@remkoj/optimizely-graph-client';
export declare const getServerClient: () => IOptiGraphClient;
export declare const getAuthorizedServerClient: (token?: string) => IOptiGraphClient;
declare const _default: IOptiGraphClient;
export default _default;
