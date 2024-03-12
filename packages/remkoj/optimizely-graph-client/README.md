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
import { gql , type GraphQLClient } from 'graphql-request'
import createClient, { RouteResolver, ChannelRepository } from '@remkoj/optimizely-graph-client'

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
  single_key: "your_single_key",
  dxp_url: "https://example.com"
})
const result = await client.request(document)
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