/**
 * React hook to determine if the Optimizely Web "test cookie" from the
 * Optimizely Web Google Chrome add-on has been set. This can be used to
 * trigger features based upon the adding/removing of this cookie.
 *
 * @param       pollingInterval     The frequency with which to check for
 *                                  changes.
 * @returns     true if the cookie exists; false otherwise
 */
export declare function useIsInTestMode(pollingInterval?: number): boolean;
export default useIsInTestMode;
