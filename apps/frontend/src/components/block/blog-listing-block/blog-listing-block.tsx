"use client";

import { ReactNode, createContext, useEffect, useMemo, useState } from "react";
import type { Types } from "@/lib/api/articles";
import BlogListing from "./partials/_blog-listing";
import ListingFilters from "./partials/_filters";
import { useUrlState } from "@/lib/use-url-state";
import LocalTime from "@/components/shared/local-time";

type BlogListingComponent = {
  locale: string;
  selectedPageSize: number;
  showFilters: boolean;
  initialData: any;
};

type BlogListingContext = {
  currentItems: any[];
  datesOptions: DropdownItem[];
  setPublishedDate: (value: any) => void;
  selectedPublishedDate: string;
  authorOptions: DropdownItem[];
  setSelectedAuthor: (value: any) => void;
  selectedAuthor: string;
  pageSize: number;
  setPageSize: (value: any) => void;
  isLoading: boolean;
  showFilters: boolean;
};

export type DropdownItem<T extends number | string | unknown = unknown> = {
  value: T;
  label: string | ReactNode;
  count: number;
};

const ARTICLES_SERVICE = "/api/content/articles";
export const ALL_AUTHORS = "-all-";
export const ALL_DATES = "-all-";
const pageSizeOptions: number[] = [6, 12, 24, 36];
const defaultPageSize: number = 12;

export const BlogListingContext = createContext<BlogListingContext>({
  currentItems: [],
  pageSize: defaultPageSize,
  setPageSize: (value: any) => {},
  isLoading: false,
  showFilters: false,
  datesOptions: [],
  setPublishedDate: (value: any) => {},
  selectedPublishedDate: ALL_DATES,
  authorOptions: [],
  setSelectedAuthor: (value: any) => {},
  selectedAuthor: ALL_AUTHORS,
});

const BlogListingBlock: React.FC<BlogListingComponent> = ({
  locale,
  selectedPageSize,
  showFilters = true,
  initialData,
}) => {
  const [{ facets, items }, setCurrentItems] =
    useState<Types.GetArticlesResult>(initialData);

  const authorOptions: DropdownItem<string>[] = useMemo(
    () =>
      [
        { label: "All authors", value: ALL_AUTHORS } as DropdownItem<string>,
      ].concat(
        facets.author.map((x) => {
          return {
            label: x.name,
            value: x.name,
            count: x.count,
          };
        })
      ),
    [facets]
  );
  const datesOptions: DropdownItem<string>[] = useMemo(
    () =>
      [{ label: "Any time", value: ALL_DATES } as DropdownItem<string>]
        .concat(
          facets.published.map((x) => {
            return {
              label: <LocalTime date={x.date} mode="Date" />,
              value: x.date,
              count: x.count,
            };
          })
        )
        .filter((x) => x.count !== 0),
    [facets]
  );

  const [selectedAuthor, setSelectedAuthor] = useUrlState<string>(
    "author",
    ALL_AUTHORS,
    (author) => authorOptions.some((x) => x.value == author),
    (s) => s,
    (s) => s
  );
  const [selectedPublishedDate, setPublishedDate] = useUrlState<string>(
    "published",
    ALL_DATES,
    (published) => datesOptions.some((x) => x.value == published),
    (s) => s,
    (s) => s
  );
  const [pageSize, setPageSize] = useUrlState<number>(
    "pageSize",
    selectedPageSize,
    (size) => !isNaN(size) && pageSizeOptions.includes(size),
    (n) => Number.parseInt(n, 10),
    (n) => n.toString(10)
  );

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const blogListingContext = {
    currentItems: items,
    datesOptions,
    setPublishedDate,
    selectedPublishedDate,
    authorOptions,
    setSelectedAuthor,
    selectedAuthor,
    pageSize,
    setPageSize,
    isLoading,
    showFilters,
  };

  // api call
  useEffect(() => {
    const abortErrorMessage = "Article refresh aborted"
    const searchParams = new URLSearchParams();
    searchParams.set("locale", locale);
    searchParams.set("pageSize", pageSize.toString());
    if (selectedAuthor != ALL_AUTHORS) {
      searchParams.set("author", selectedAuthor);
    }
    if (selectedPublishedDate != ALL_DATES) {
      searchParams.set("published", selectedPublishedDate);
    }

    const path = `${ARTICLES_SERVICE}?${searchParams.toString()}`;
    const refreshArticles = new AbortController();

    setIsLoading(true);

    fetch(path, {
      signal: refreshArticles.signal,
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Invalid response received");
      })
      .then((data) => {
        if (data.items) {
          setCurrentItems(data);
          setIsLoading(false);
        }
      })
      .catch((e) => {
        if (e != abortErrorMessage)
          console.error("Caught error", e);
      });
    return () => {
      refreshArticles.abort(abortErrorMessage);
    };
  }, [locale, pageSize, selectedAuthor, selectedPublishedDate]);

  return (
    <BlogListingContext.Provider value={blogListingContext}>
      <div className={`w-full ${showFilters ? "mt-32" : ""}`}>
        {showFilters && <ListingFilters />}
        <BlogListing />
      </div>
    </BlogListingContext.Provider>
  );
};

export default BlogListingBlock;
