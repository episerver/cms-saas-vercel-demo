"use client";

import { createContext, useEffect, useState } from "react";
import BlogListing from "./partials/_blog-listing";
import ListingFilters from "./partials/_filters";
import { BlogPostProps } from "../blog-post-block";

type BlogListingComponent = {
  locale: string;
  selectedPageSize: number;
  showFilters: boolean;
  initialData: any;
};

type BlogListingContext = {
  currentItems: BlogPostProps[];
  currentFilters: any;
  setCurrentFilters: (value: any) => void;
  isLoading: boolean;
  showFilters: boolean;
};

export const BlogListingContext = createContext<BlogListingContext>({
  currentItems: [],
  currentFilters: [],
  setCurrentFilters: (value: any) => {},
  isLoading: false,
  showFilters: false,
});

const ARTICLES_SERVICE = "/api/content/articles";
const ALL_AUTHORS = "-all-";
const ALL_DATES = "-all-";
const pageSizeOptions: number[] = [6, 12, 24, 36];
const defaultPageSize: number = 12;

const BlogListingBlock: React.FC<BlogListingComponent> = ({
  locale,
  selectedPageSize,
  showFilters = true,
  initialData,
}) => {
  const [currentItems, setCurrentItems] = useState<BlogPostProps[]>(
    initialData.items
  );
  const [currentFilters, setCurrentFilters] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const blogListingContext = {
    currentItems,
    currentFilters,
    setCurrentFilters,
    isLoading,
    showFilters,
  };

  // api call
  useEffect(() => {
    const searchParams = new URLSearchParams();
    searchParams.set("locale", locale);
    searchParams.set("pageSize", selectedPageSize.toString());
    /*if (selectedAuthor != ALL_AUTHORS){
      searchParams.set("author", selectedAuthor);
    }
    if (selectedPublishedDate != ALL_DATES) {
      searchParams.set("published", selectedPublishedDate);
    }*/

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
          setCurrentItems(data.items);
          setIsLoading(false);
        }
      })
      .catch((e) => {
        console.error("Caught error", e);
      });
    return () => {
      refreshArticles.abort();
    };
  }, [locale, selectedPageSize, showFilters]);

  return (
    <BlogListingContext.Provider value={blogListingContext}>
      <div className={`${showFilters ? "mt-32" : ""}`}>
        {showFilters && <ListingFilters />}
        <BlogListing />
      </div>
    </BlogListingContext.Provider>
  );
};

export default BlogListingBlock;
