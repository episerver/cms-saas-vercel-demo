import { type Types } from '@graphql-codegen/plugin-helpers';
import type { TransformOptions } from './types';
export declare function pickTransformOptions(options: Record<string, any>): TransformOptions;
export declare const transform: Types.DocumentTransformFunction<TransformOptions>;
declare const _default: {
    transform: Types.DocumentTransformFunction<TransformOptions>;
};
export default _default;
