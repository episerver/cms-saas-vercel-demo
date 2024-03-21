import type { OptimizelyGraphConfig } from '../../types.js';
import { type IOptiGraphClient } from '../../client/index.js';
import ChannelDefinition from './definition.js';
export declare class ChannelRepository {
    protected client: IOptiGraphClient;
    constructor(clientOrConfig?: IOptiGraphClient | OptimizelyGraphConfig);
    getAll(): Promise<ReadonlyArray<Readonly<ChannelDefinition>>>;
    getById(id: string): Promise<Readonly<ChannelDefinition> | null>;
    getByDomain(domain: string, fallback?: boolean): Promise<Readonly<ChannelDefinition> | null>;
    getDefaultDomain(): string;
    getCmsDomain(): string;
    getDefault(): Promise<Readonly<ChannelDefinition> | null>;
    protected transformGraphResponse(ch: any): ChannelDefinition;
}
export default ChannelRepository;
