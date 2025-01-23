import { type getHeaderDataQuery } from '@gql/graphql';

type ArrayType<T> = T extends Array<infer R> ? R : T


export type HeaderData = ArrayType<NonNullable<Required<getHeaderDataQuery>['appLayout']>['items']>
export type HeaderMenuItems = NonNullable<HeaderData>['mainMenu']
export type HeaderMenuItemData = NonNullable<ArrayType<NonNullable<HeaderMenuItems>>>
