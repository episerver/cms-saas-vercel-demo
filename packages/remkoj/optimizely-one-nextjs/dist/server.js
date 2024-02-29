import 'server-only';
import EnvVars from './env-vars';
import EnvTools from './utils/env';
export * from './products';
export * as Session from './utils/session';
export * as EnvTools from './utils/env';
export function isOptimizelyOneEnabled() {
    return EnvTools.readValueAsBoolean(EnvVars.HelperEnabled, false);
}
export * from './server-components';
