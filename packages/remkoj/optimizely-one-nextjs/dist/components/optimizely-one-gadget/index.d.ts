import { type FunctionComponent } from 'react';
import '../../styles.css';
export type OptimizelyOneGadgetProps = {
    /**
     * The API Route at which the companion API has been installed in your
     * Next.JS Application.
     *
     * If not set, defaults to "/api/me"
     */
    servicePrefix?: string;
    /**
     * The interval, in milliseconds, between refreshes of the content in the
     * debug panels.
     *
     * If not set, defaults to 0 (no auto refresh)
     */
    refreshInterval?: number;
    /**
     * If set, bypasses the enabled/disabled detection allowing the application
     * to take control of the visibility of the gadget.
     */
    show?: boolean;
};
/**
 * Add an Optimizely One Debug helper to the page, which can be triggered by
 * the "test cookie" feature of the Optimizely Web Experimentation browser
 * extension.
 *
 * @param       param0      The component properties
 * @returns     The component JSX
 */
export declare const OptimizelyOneGadget: FunctionComponent<OptimizelyOneGadgetProps>;
export default OptimizelyOneGadget;
