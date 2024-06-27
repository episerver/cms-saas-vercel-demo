[Back to readme](../README.md)
## Environment Variables
The frontend can be configured using the following environment variable. The default configuration leverages templates, to set default values based upon other environment variables. The template \${SITE_DOMAIN} will be replaced with the value for SITE_DOMAIN.

### General settings
| Variable | Default value | Usage |
| --- | --- | --- |
| OPTIMIZELY_CMS_URL | YOUR_CMS_DOMAIN_HERE | Put the URL of the CMS instance here, without a path. For example: https://example.cms.optimizely.com/ |
| SITE_DOMAIN | ${VERCEL_BRANCH_URL} | The domain where the site is running, this will be used to configure the publishing webhook on Optimizely Graph during the build process. The default value takes a stable URL from Vercel. See the [Vercel documentation](https://vercel.com/docs/projects/environment-variables/system-environment-variables)
| OPTIMIZELY_PUBLISH_TOKEN | optly-PUBLISH_TOKEN | A token that makes it more difficult to flush the site cache. It must be provided to the /api/content/publish endpoint and is included by default when the webhook for publishing is registered. |

### Optimizely Graph
These settings are available on the Dashboard of the CMS, in the "Render Content" section.
| Variable | Default value | Usage |
| --- | --- | --- |
| OPTIMIZELY_GRAPH_GATEWAY | https://cg.optimizely.com | The address of the Optimizely Graph instance |
| OPTIMIZELY_GRAPH_APP_KEY | YOUR-KEY-HERE | The App key for the Optimizely Graph instance |
| OPTIMIZELY_GRAPH_SECRET | YOUR-SECRET-HERE | The Secret for the Optimizely Graph instance |
| OPTIMIZELY_GRAPH_SINGLE_KEY | YOUR-KEY-HERE | The Single key for the Optimizely Graph instance |

### Debugging output
| Variable | Default value | Usage |
| --- | --- | --- |
| OPTIMIZELY_DEBUG | 0 | Set this value to "1" to enable verbose output of the frontend to aid in debugging
| OPTIMIZELY_GRAPH_QUERY_LOG | 0 | Set this value to "1" to write all GraphQL queries to the console output |

### Optionally enable Optimizely One
Use the environment variables below to enable the included integrations with [Optimizely One](https://www.optimizely.com/products/), to activate a product all environment variables for that product must have a valid value.

| Product | Variable | Usage |
| --- | --- | --- |
| [Data Platform](https://www.optimizely.com/enhancements/data-platform/) | OPTIMIZELY_DATAPLATFORM_ID | Set this value to the ID of the JavaScript tracker of your Optimizely Data Platform instance to enable tracking and activate the "Optimizely Data Platform Embed" block.
| [Content Intelligence / Recommendations](https://www.optimizely.com/recommendations/) | OPTIMIZELY_CONTENTRECS_CLIENT | Set this value to the Client name of your property |
| [Content Intelligence / Recommendations](https://www.optimizely.com/recommendations/) | OPTIMIZELY_CONTENTRECS_DELIVERY | Set this value to the Delivery ID of your property |
| [Content Intelligence / Recommendations](https://www.optimizely.com/recommendations/) | OPTIMIZELY_CONTENTRECS_DELIVERY_KEY | Set this value to the Engagement Delivery key to be used for this site |
| [Web Experimentation](https://www.optimizely.com/products/experiment/web-experimentation/) | OPTIMIZELY_WEB_EXPERIMENTATION_PROJECT | Set this to the ProjectID of your Web Experimentation project |