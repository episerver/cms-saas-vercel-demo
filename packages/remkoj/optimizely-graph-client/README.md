# Optimizely Graph Client
An extension of the [graphql-request](https://www.npmjs.com/package/graphql-request) package, providing the configuration and additional logic needed to connect with Optimizely Graph.

### Provided services
The package contains the following services:
- The GraphQL Client, based upon [graphql-request](https://www.npmjs.com/package/graphql-request), supporting the following authentication schemes for Optimizely Graph:
  - Public access (e.g. using the Single key)
  - HMAC Signed messages
  - Basic Authentication
  - Token pass-through (for Optimizely CMS in context editing)
- The configuration logic, to read and valide the configuration
- A RouteResolver, which simplifies handling routes when using Optimizely CMS
- A ChannelRepository, which simplifies reading channel (website) configuration from the Optimizely CMS

### Usage
```typescript
// Import the library
import { gql } from 'graphql-request'
import createClient, { AuthMode } from '@remkoj/optimizely-graph-client/client'
import Router from '@remkoj/optimizely-graph-client/router'
import ChannelRepository from '@remkoj/optimizely-graph-client/channels'

// Prepare the query
const document = gql`query {
  Content {
    items {
      Name
      ContentLink {
        GuidValue
      }
      Language {
        Name
      }
    }
  }
}`

// Create an instance of the client, the configuration object may be omitted 
// when executing on Node.JS. If no configuration is provided, it will be read
// from the environment variables.
// The variable client will be of type: GraphQLClient
const client = createClient({
  single_key: "your_single_key"
})

// By default the client will always use AuthMode.Public, unless overridden by the
// second parameter of createClient. Use the updateAuthentication to change the
// authentication mode after creation
client.updateAuthentication(AuthMode.Public)

// Execute a GraphQL query, the second paramer can be used to send in variables
const result = await client.request(document)

// Use the Router to get all routes registered by Optimizely CMS
const router = new Router(client)
const allPaths = await router.getRoutes()

// Use the ChannelRepository to get all registered channels within Optimizely CMS
const channels = new ChannelRepository(client)
const allChannels = await channels.getAll()
```

### Configuration
The following configuration options are available:

| Environment | Configuration object | Required | Usage |
| --- | --- | --- | --- |
| `OPTIMIZELY_GRAPH_GATEWAY` | gateway | no | The endpoint for Optimizely Graph |
| `OPTIMIZELY_GRAPH_SINGLE_KEY` | single_key | yes | The key needed for public, read-only access |
| `OPTIMIZELY_GRAPH_SECRET` | secret | no | The Optimizely Graph secret for write access, this value must never be made available in a browser |
| `OPTIMIZELY_GRAPH_APP_KEY` | app_key | no | The Optimizely Graph app_key for write access, this value must never be made available in a browser |
| `SITE_DOMAIN` | deploy_domain | no | The domain of the frontend |
| `OPTIMIZELY_CMS_URL` | dxp_url | yes | The domain where the CMS has been installed |
| `OPTIMIZELY_GRAPH_QUERY_LOG` | query_log | no | Set to "true" to enable query output to the console |
| `OPTIMIZELY_DEBUG` | debug | no | Set to "true" to enable verbose debug output to the console |