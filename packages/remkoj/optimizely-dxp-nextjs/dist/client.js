import 'server-only';
import React from 'react';
import createClient from '@remkoj/optimizely-graph-client';
import { isDebug } from '@remkoj/optimizely-dxp-react/rsc';
export const getServerClient = React.cache(() => {
    if (isDebug())
        console.log('⚪ [ContentGraph Shared Client] Creating new Optimizely Graph client');
    return createClient();
});
export const getAuthorizedServerClient = (token) => {
    if (isDebug())
        console.log('⚪ [ContentGraph Shared Client] Creating new Optimizely Graph client with authentication details');
    const client = createClient();
    client.updateAuthentication(token);
    if (isDebug())
        console.log(`🟡 [ContentGraph Shared Client] Updated authentication, current mode: ${client.currentAuthMode}`);
    return client;
};
export default getServerClient();
