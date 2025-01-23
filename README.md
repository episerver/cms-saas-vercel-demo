# Optimizely CMS Demo Site <!-- omit in toc -->

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](./LICENSE)

> [!IMPORTANT]  
> The latest version of this site contains a new content pack and schema. When updating an existing site, make sure to [apply the latest content pack](#3-content-pack-upgrade). If you need to, you can use the ["CMS Reset" command line tool](https://github.com/remkoj/optimizely-dxp-clients/tree/main/packages/optimizely-cms-cli#3-available-commands) to clear your current instance.

## Contents <!-- omit in toc -->
- [1. Introduction](#1-introduction)
- [2. Getting started](#2-getting-started)
  - [2.1. Requirements](#21-requirements)
  - [2.2. Deploying \& Configuring](#22-deploying--configuring)
  - [2.3. Additional configuration options](#23-additional-configuration-options)
- [3. Content pack upgrade](#3-content-pack-upgrade)
- [4. Product specific instructions](#4-product-specific-instructions)
  - [4.1. Content Recommendations](#41-content-recommendations)
- [5. Further documentation](#5-further-documentation)


## 1. Introduction
This repository contains content and frontend that form the Optimizely SaaS CMS Demo Site. 

If you're looking to build a new site from scratch, please use the [Create Next App Template](https://github.com/remkoj/optimizely-saas-starter) to create an empty frontend using the same structure and tooling as this demo site.

## 2. Getting started
### 2.1. Requirements
Make sure you're good to go, by:
- Requesting an Optimizely CMS instance using [Sign-up for the program](https://www.optimizely.com/saas-core-waitlist/)
- Ensure you have a GitHub account
- Ensuring you have (at least) a hobby plan account at Vercel, or are comfortable creating one

After signing up for the beta instance and provisioning of the instance, you'll get an e-mail with the keys and instructions to activate your account.

### 2.2. Deploying & Configuring
[Follow these instructions to configure the CMS](docs/cms-config.md)

After you've completed the CMS configuration instructions and collected the needed information, click the "Deploy to vercel" button below, to deploy this site to your Vercel Account

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fepiserver%2Fcms-saas-vercel-demo&env=OPTIMIZELY_CMS_URL,OPTIMIZELY_GRAPH_SECRET,OPTIMIZELY_GRAPH_APP_KEY,OPTIMIZELY_GRAPH_SINGLE_KEY&root-directory=apps/frontend&framework=nextjs&project-name=optly-cms-demo&repository-name=optly-cms-demo&demo-title=Optimizely%20CMS%20Demo&demo-description=A%20site%20powered%20by%20the%20Optimizely%20CMS%2C%20showcasing%20the%20speed%20of%20a%20static%20site%2C%20without%20sacrificing%20editor%20capability.&demo-url=https%3A%2F%2Fsaas-cms-demo.vercel.app%2F&demo-image=https%3A%2F%2Fwww.optimizely.com%2Fglobalassets%2F02.-global-images%2Fproduct-icons%2Ffor-dark-bkgs%2Fopt-icononly_solution_icon_55px_dark_orchestrate.svg)

| Environment variable | Instruction |
| - | - |
| OPTIMIZELY_CMS_URL | The URL where the Optimizely CMS can be reached by the build process; for example: `https://example.cms.optimizely.com/`
| OPTIMIZELY_GRAPH_SECRET | The Content Graph Secret can be made visible on the CMS Dashboard, within the "Render Content" section. |
| OPTIMIZELY_GRAPH_APP_KEY | The Content Graph App key, which is shown on the CMS Dashboard, within the "Render Content" section. |
| OPTIMIZELY_GRAPH_SINGLE_KEY | The Content Graph Single key	, which is shown on the CMS Dashboard, within the "Render Content" section. |

When the deployment has succeeded, the following steps are needed to both fix the "Page not found" on the homepage and enable  "Preview".

[Fix "Not Found" error and enable preview](docs/editing.md)

### 2.3. Additional configuration options

Please refer to the [Supported environment variables](docs/env-vars.md) document for all supported configuration options for the frontend. The steps above only outine the mimimum required configuration to obtain a working demo site. Many of the included features require additional configuration to be enabled.

***Please note:** every configuration change to the environment variables requires a new deployment to become active.*

## 3. Content pack upgrade
When installing the latest version of this demo site, you might need to apply a content pack update.

> [!IMPORTANT]  
> When the currently installed contentpack was not provided from this repository (for example from the visual-builder-beta), the content cannot be upgraded due to conflicts. Use the ["CMS Reset" command line tool](https://github.com/remkoj/optimizely-dxp-clients/tree/main/packages/optimizely-cms-cli#3-available-commands) to clean your CMS instance and start fresh.

To upgrade the content pack, take these steps:
- Import the new content pack as described on [Configuring the CMS](docs/cms-config.md). The only difference here is that you will ***not create*** a new Application, but update the existing one use the newly imported homepage.
- Make sure to run the Graph Full Index as specified

Running this upgrade process will yield you a working demo site, however it will now contain content-types that are no longer supported. If you need them back you can restore the code from `apps/old_cms_types` in your fork/clone of this repository.

## 4. Product specific instructions
### 4.1. Content Recommendations
For Content Recommendations to work, the following steps are needed:
1. Configure Content Recommendations using the environment variables of the [`Next.JS Optimizely One package`](https://www.npmjs.com/package/@remkoj/optimizely-one-nextjs#252-list-of-supported-environment-variables)
2. Add the Content Recommendations widget using either the block (Page) or element (Experience), you will need to configure:
   - The API Key of the delivery, which is shown as value of 'data-api-key=' in the example code within Content Recommendations
   - The number of recommendations to show

## 5. Further documentation
* [Local development](docs/dev-env.md)
* [CMS Configuration](docs/cms-config.md)
* [Enable on-page / in context editing](docs/editing.md)
* [Supported environment variables](docs/env-vars.md)
* [Custom demo building](docs/demo-building.md)
* [General solution description](docs/solution/index.md)