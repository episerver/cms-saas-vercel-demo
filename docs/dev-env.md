[Back to readme](../README.md)
# Development environment

## Introduction
Run this project locally with a local version of CMS SaaS.

## Getting Started
### Pre-requisites
* Request an Optimizely CMS instance using [Sign-up for the program](https://www.optimizely.com/saas-core-waitlist/)
    * If you're not using a brand new instance, make sure to delete all existing indices using the `Reset Account` button in the Optimizely Graph Admin before following the rest of the steps.
* Have CMS SaaS running locally by following [these steps](https://github.com/episerver/cms/blob/main/docs/saas_local_dev.md).
    * Be sure to [override the Graph configuration](https://github.com/episerver/cms/blob/main/docs/saas_local_dev.md#connect-to-existing-environments) to point to the values in the Optimizely CMS instance you set up.

### Steps
1. Configure your local CMS SaaS by following [these instructions](./cms-config.md). Keep in mind the urls used in the configuration will be your localhost.
    1. Use the file `InitialData_Testing.episerverdata` (in order) instead of `InitialData.episerverdata`
1. Create a copy of the `.env` file and name it `.env.local`. 
    1. Set `OPTIMIZELY_CMS_URL` to the url from your requested CMS instance (ex. https://app-xxxxx.cmstest.optimizely.com/).
    1. Set `SITE_DOMAIN` to `localhost:3000`.
    1. Set `OPTIMIZELY_GRAPH_SECRET` to the value shown on your CMS SaaS dashboard.
    1. Set `OPTIMIZELY_GRAPH_APP_KEY` to the value shown on your CMS SaaS dashboard.
    1. Set `OPTIMIZELY_GRAPH_SINGLE_KEY` to the value shown on your CMS SaaS dashboard.
    1. Set `OPTIMIZELY_GRAPH_GATEWAY` to the value shown on your CMS SaaS dashboard (ex. `https://preview.cg.optimizely.com/`).
1. Run `yarn dev-https`.
1. Enable OPE by following [these steps](./editing.md). You will use `localhost:3000` instead of a Vercel url.

