[Back home](../../README.md)
# Solution description <!-- omit in toc -->

- [1. Overarching design / goals](#1-overarching-design--goals)
  - [1.1. General information](#11-general-information)
  - [1.2. Security considerations](#12-security-considerations)
- [2. Dependencies](#2-dependencies)
- [3. Parts](#3-parts)
- [4. Frontend Application](#4-frontend-application)
  - [4.1. Routing](#41-routing)
  - [4.2. Folders](#42-folders)
  - [4.3. Components \& Utilities](#43-components--utilities)
    - [4.3.1. ComponentFactory](#431-componentfactory)
    - [4.3.2. GraphQL Client](#432-graphql-client)
    - [4.3.3. CmsContent](#433-cmscontent)
    - [4.3.4. CmsContentArea](#434-cmscontentarea)
    - [4.3.5. RouteResolver](#435-routeresolver)
    - [4.3.6. MetaDataResolver](#436-metadataresolver)
  - [4.4. GraphQL](#44-graphql)
    - [4.4.1. Functions](#441-functions)
    - [4.4.2. Fragments](#442-fragments)
- [5. Demonstration specific features](#5-demonstration-specific-features)

## 1. Overarching design / goals
### 1.1. General information
This demo site aims to bring together the client side performance of Next.JS, supporting static site generation (SSG), without sacrificing the abitlity of editors to:
1. Use the in context / on page editing capabilities of the Optimizely CMS
2. Immediately publish any change to the website, without the need to rebuild all static pages
3. Add and remove pages as needed to publish the content

### 1.2. Security considerations
The solution has been designed, so that the keys and credentials needed to access ContentGraph or the CMS will never be made available to the browser.

This also implies that data fetching from the browser is done through proxies under the `/api` routes.

## 2. Dependencies
The solution builds upon the following frameworks and libraries
| Framework / Library | Purpose |
| --- | --- |
| [Next.JS](https://nextjs.org/) | Main frontend framework for the website |
| [NextAuth.js](https://next-auth.js.org/) | Frontend authentication framework |
| [Apollo Client](https://www.apollographql.com/docs/react/) | GraphQL Client |
| [GraphQL Code Generator](https://the-guild.dev/graphql/codegen) | GraphQL typings and function generators |
| [TailwindCSS](https://tailwindcss.com/) / [Headless UI](https://headlessui.com/) | Styling framework

## 3. Parts
The solution uses a monorepo style of code management and consists of the following parts:

| Folder | Type | workspace | Description |
| --- | --- | --- | --- |
| [apps/frontend](../../apps/frontend/README.md) | Next.JS Application | `frontend` | The main Next.JS based frontend application |
| [packages/remkoj/optimizely-dxp-cli](../../packages/remkoj/optimizely-dxp-cli/README.md) | Package | `@remkoj/optimizely-dxp-cli` | A helper package that adds developer productivity tools, as well as building tools specific to Optimizely CMS. |
| [packages/remkoj/optimizely-dxp-nextjs](../../packages/remkoj/optimizely-dxp-nextjs/README.md) | Package | `@remkoj/optimizely-dxp-nextjs` | Next.JS Specific components and helpers for the Frontend |
| [packages/remkoj/optimizely-dxp-react](../../packages/remkoj/optimizely-dxp-react/README.md) | Package | `@remkoj/optimizely-dxp-react` | React components and helpers for both server and client side |
| [packages/remkoj/optimizely-dxp-react-server](../../packages/remkoj/optimizely-dxp-react-server/README.md) | Package | `@remkoj/optimizely-dxp-react-server` | Server Side React components and helpers |

## 4. Frontend Application
### 4.1. Routing
The frontend uses the Next.JS app router to resolve routes to content, allowing a Frontend developer to add any programmatic route to the frontend.

There are two specific routes that must be in place in order to allow marketeers to define the pages within the Optimizely CMS. These are the following three routes:

- `/[lang]/[[...path]]`: All published pages, supporting both meta-data and static generation
- `/ui/[[...path]]`: All system pages used by the On Page Editing system
- `/api/content/publish`: The webhook registered by the included build-script to flush the Next.JS static pages when a page gets published.
- `/src/middleware.ts`: A Next.JS middleware to ensure that all routes are prefixed with a language which has been configured within the Optimizely CMS

All other routes are specific to the implementation and components included. You may or may not need these for your specific implementation.

### 4.2. Folders
Within the frontend the folder structure follows the "Next.JS with src folder" pattern, putting all code inside the `src/` folder. The implementation uses the following:
- `src/app/`: App router layouts, pages & services
- `src/components/`: All components, with `block/` used for Components bound to *CMS Block* types and `page/` used for components bound to *CMS Page* types.
- `gql`: Output folder for the GraphQL Codegen configuration

### 4.3. Components & Utilities

#### 4.3.1. ComponentFactory

#### 4.3.2. GraphQL Client

#### 4.3.3. CmsContent

#### 4.3.4. CmsContentArea

#### 4.3.5. RouteResolver

#### 4.3.6. MetaDataResolver

### 4.4. GraphQL 

#### 4.4.1. Functions
In order to simplify loading of content from ContentGraph, the frontend auto-generates two functions which standardize the loading procedure as well as prevent second query to fetch the component specific fields.
- `getContentById`: Load a content item by its identifier, with all fields needed for components that match that item from ContentGraph. The primary use-case here is the first query for `/ui/[[...path]]`
- `getContentByPath`: Load a content item by the CMS generated route, with all fields needed for components that match that item from ContentGraph. The primary use-case here is the first query for `/[lang]/[[...path]]`

#### 4.4.2. Fragments
All components should provide a GraphQL framgent to load their data from ContentGraph, these fragments will be automatically merged into the main helper
functions (getContentByPath and getContentById using GraphQL Codegen) to minimize the number of queries needed to load the data for a page.

To optimize the generated query size and normalize output so it can be used by the `CmsContent` and `CmsContentAra` components, the following GraphQL Fragments are available:
| Name | Description |
| --- | --- |
| ContentLink | Get the fields needed from a ContentLink field, so it can be used to look up content |
| ContentLinkSearch | Get the fields needed from a ContentLink field, so it can be used to look up content, within a searchable context |
| IContentData | The fields on an IContent item needed by the `CmsContent` component to reliably determine the content type and load it's data
| ContentAreaItemData | Retrieve the items within a *searchable* ContentArea on a **Page** component, so that the content can be rendered by the `CmsContentArea` component
| BlockContentAreaItemData | Retrieve the items within a *non-searchable* ContentArea on a **Block** component, so that the content can be rendered by the `CmsContentArea` component |
| BlockContentAreaItemSearchData | Retrieve the items within a *searchable* ContentArea on a **Block** component, so that the content can be rendered by the `CmsContentArea` component |
| LinkItemData | |
| ImageData | |
| ImageDataSearch | |

## 5. Demonstration specific features
With Optimizely CMS being a part of the larger suite of products delivered by Optimizely, the frontend incorporates basic integrations with other parts of this suite:
