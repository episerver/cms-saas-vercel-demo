# Optimizely CMS Demo Site

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](./LICENSE)

## Introduction
This repository contains the packages and applications that form the Optimizely CMS Demo Site.

## Getting started
Make sure you're good to go, by:
- Requesting an Optimizely CMS instance using [Sign-up for the program](https://www.optimizely.com/saas-core-waitlist/)
- Ensuring you have (at least) a hobby plan account at Vercel, or are comfortable creating one

After signing up for the beta instance and provisioning of the instance, you'll get an e-mail with the keys and instructions to activate your account.

[Follow these instructions to configure the CMS](docs/cms-config.md)

After you've completed the CMS configuration instructions and collected the needed information, click the "Deploy to vercel" button below, to deploy this site to your Vercel Account

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fepiserver%2Fcms-saas-vercel-demo&env=DXP_URL,OPTIMIZELY_CONTENTGRAPH_SECRET,OPTIMIZELY_CONTENTGRAPH_APP_KEY,OPTIMIZELY_CONTENTGRAPH_SINGLE_KEY&root-directory=apps/frontend&framework=nextjs&project-name=optly-cms-demo&repository-name=optly-cms-demo&demo-title=Optimizely%20CMS%20Demo&demo-description=A%20site%20powered%20by%20the%20Optimizely%20CMS%2C%20showcasing%20the%20speed%20of%20a%20static%20site%2C%20without%20sacrificing%20editor%20capability.&demo-url=https%3A%2F%2Fsaas-cms-demo.vercel.app%2F&demo-image=https%3A%2F%2Fwww.optimizely.com%2Fglobalassets%2F02.-global-images%2Fproduct-icons%2Ffor-dark-bkgs%2Fopt-icononly_solution_icon_55px_dark_orchestrate.svg)

| Environment variable | Instruction |
| - | - |
| DXP_URL | The URL where the Optimizely CMS can be reached by the build process; for example: `https://example.cms.optimizely.com/`
| OPTIMIZELY_CONTENTGRAPH_SECRET | The Content Graph Secret can be made visible on the CMS Dashboard, within the "Render Content" section. |
| OPTIMIZELY_CONTENTGRAPH_APP_KEY | The Content Graph App key, which is shown on the CMS Dashboard, within the "Render Content" section. |
| OPTIMIZELY_CONTENTGRAPH_SINGLE_KEY | The Content Graph Single key	, which is shown on the CMS Dashboard, within the "Render Content" section. |

When the deployment has succeeded, the following steps are needed to enable "On Page Editing" or "In Context Editing".

[Enable on-page / in context editing](docs/editing.md)

### Additional configuration options

Please refer to the [Supported environment variables](docs/env-vars.md) document for all supported configuration options for the frontend. The steps above only outine the mimimum required configuration to obtain a working demo site. ***Please note:** every configuration change to the environment variables requires a new deployment to become active.*

## Topics
* [Local development](docs/dev-env.md)
* [CMS Configuration](docs/cms-config.md)
* [Enable on-page / in context editing](docs/editing.md)
* [Supported environment variables](docs/env-vars.md)
* [Custom demo building](docs/demo-building.md)
