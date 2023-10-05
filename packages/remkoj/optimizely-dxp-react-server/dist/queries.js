import { gql } from './gql';
export const CmsContentFragments = {
    IContentDataProps: ["contentType", "id", "locale", "path", "__typename"],
    IContentData: gql(/* graphql */ `fragment IContentData on IContent {
        contentType: ContentType
        id: ContentLink {
          id: Id,
          workId: WorkId,
          guidValue: GuidValue
        }
        locale: Language {
            name: Name
        }
        path:RelativePath
    }`),
    ContentAreaItemData: gql(/* graphql */ `fragment ContentAreaItemData on ContentAreaItemModelSearch {
        item: ContentLink {
            id: Id,
            workId: WorkId,
            guidValue: GuidValue
            data: Expanded {
            ...BlockData
            }
        }
        displayOption:DisplayOption
    }`),
    BlockData: gql(/* graphql */ `fragment BlockData on IContent {
        ...IContentData
    }`),
    PageData: gql(/* graphql */ `fragment PageData on IContent {
        ...IContentData
    }`)
};
export const ContentAreaFragments = {
    ContentAreaItemBase: gql(/* graphql */ `fragment ContentAreaItemBase on ContentAreaItemModelSearch {
      contentLink:ContentLink { 
          id:Id
          workId:WorkId
          guidValue:GuidValue
          component:Expanded {
              path:RelativePath
              type:ContentType
          }
      }
      displayOption:DisplayOption
  }`)
};
export const getContentById = gql(/* GraphQL */ `query getContentById($id: Int, $workId: Int, $guidValue: String, $locale: [Locales!], $isCommonDraft: Boolean) {
    Content(
        where: {
            ContentLink: { 
                Id: { eq: $id }, 
                WorkId: { eq: $workId }, 
                GuidValue: { eq: $guidValue } 
            }
            IsCommonDraft: { eq: $isCommonDraft }
        }
        locale: $locale
    ) {
        total
        items {
            ...PageData
            ...BlockData
        }
    }
}`);
export const getContentByPath = gql(/* GraphQL */ `query getContentByPath($path: String!, $locale: [Locales], $siteId: String)
{
  Content(
    where: {
      RelativePath: {
        eq: $path
      }
      SiteId: {
        eq: $siteId
      }
  	},
    locale: $locale
  ) {
    items {
      ...PageData
    }
  }
}`);
export const getContentTypeQuery = gql(/* graphql */ `query getContentType($id: Int, $workId: Int, $guidValue: String, $locale: [Locales])
{
  Content(
    where: {
      ContentLink: {
        GuidValue: {
          eq: $guidValue
        }
        Id: {
          eq: $id
        },
        WorkId: {
          eq: $workId
        }
      }
    },
    locale: $locale
    limit: 1
  ) {
    items {
    	ContentType
    },
    total
  }
}`);
