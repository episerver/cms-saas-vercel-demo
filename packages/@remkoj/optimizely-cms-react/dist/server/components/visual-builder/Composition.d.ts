import 'server-only';
import type { OptimizelyCompositionProps } from './types.js';
/**
 * Render the composition as made available through Optimizely Graph for Visual Builder
 *
 * @param param0
 * @returns     The
 */
export declare function OptimizelyComposition({ node, leafPropsFactory, nodePropsFactory }: OptimizelyCompositionProps): Promise<JSX.Element>;
export default OptimizelyComposition;
