import Header from './header';
import Footer from './footer';
/**
 * Container for the main layout components, being the header & footer scripts
 * that must be injected into the page to enable full Optimizely One Support.
 */
export const Scripts = {
    /**
     * Header scripts, this component should be placed as high in the head as
     * your layout allows.
     */
    Header,
    /**
     * Footer scripts, these should be placed as close to the closing </body> tag
     * as possible.
     */
    Footer
};
