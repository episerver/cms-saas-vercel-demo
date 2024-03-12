import 'server-only';
import type { EditPageComponent, EditViewOptions } from './types';
import type { Services } from '@remkoj/optimizely-graph-client';
import { type ComponentFactory } from '@remkoj/optimizely-dxp-react';
/**
 * Create the EditPage component needed by Next.JS to render the "On Page
 * Editing" variant of the content item selected by the editor.
 *
 * @param   dxpUrl      The domain of the CMS instance
 * @param   client      The Apollo GraphQL client to use
 * @param   channel     The static site definition to use
 * @param   factory     The component factory to be used
 * @param   options     The optional options to use to control the edit page
 * @returns The React Component that can be used by Next.JS to render the page
 */
export declare function createEditPageComponent(channel: Readonly<Services.ChannelDefinition>, factory: ComponentFactory, options?: Partial<EditViewOptions>): EditPageComponent;
export default createEditPageComponent;
