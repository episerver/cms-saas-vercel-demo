"use client";

import { createContext, useEffect, useState } from "react";
import BlogListing from "./partials/_blog-listing";
import ListingFilters from "./partials/_filters";
import { BlogPostProps } from "../blog-post-block";

type BlogListingContext = {
  currentItems: BlogPostProps[];
  currentFilters: any;
  setCurrentFilters: (value: any) => void;
};

export const BlogListingContext = createContext<BlogListingContext>({
  currentItems: [],
  currentFilters: [],
  setCurrentFilters: (value: any) => {},
});

const BlogListingBlock = ({}) => {
  const [currentItems, setCurrentItems] = useState<BlogPostProps[]>([]);
  const [currentFilters, setCurrentFilters] = useState<any>([]);

  const blogListingContext = {
    currentItems,
    currentFilters,
    setCurrentFilters,
  };

  // api call
  useEffect(() => {
    setCurrentItems([
      {
        title: "The power of flexibility: How to balance for the future",
        description: "We all know achieving a healthy balance between work and family can be challenging for working parents and careers.",
        category: "Life & Travel",
        author: "Marie Gruen",
        date: "January 30, 2024",
        image: { src: "https://placekitten.com/290/180", alt: "Kitten", width: 290, height: 180 },
        url: "#",
      },
      {
        title: "Meet Robo-Advisor, a hands-off way to invest",
        description: "Build your wealth the smart way. Invest effortlessly, with our all-new Robo-Advisor — get your own diversified portfolio in minutes.",
        category: "Life & Travel",
        author: "Marie Gruen",
        date: "January 30, 2024",
        image: { src: "https://placekitten.com/290/180", alt: "Kitten", width: 290, height: 180 },
        url: "#",
      },
      {
        title: "Planting the seeds to 400% growth",
        description: "If you’re rapidly expanding, how do you go about managing market entry speed – and spend?",
        category: "Life & Travel",
        author: "Marie Gruen",
        date: "January 30, 2024",
        image: { src: "https://placekitten.com/290/180", alt: "Kitten", width: 290, height: 180 },
        url: "#",
      },
      {
        title: "The power of flexibility: How to balance for the future",
        description: "We all know achieving a healthy balance between work and family can be challenging for working parents and careers.",
        category: "Life & Travel",
        author: "Marie Gruen",
        date: "January 30, 2024",
        image: { src: "https://placekitten.com/290/180", alt: "Kitten", width: 290, height: 180 },
        url: "#",
      },
      {
        title: "Meet Robo-Advisor, a hands-off way to invest",
        description: "Build your wealth the smart way. Invest effortlessly, with our all-new Robo-Advisor — get your own diversified portfolio in minutes.",
        category: "Life & Travel",
        author: "Marie Gruen",
        date: "January 30, 2024",
        image: { src: "https://placekitten.com/290/180", alt: "Kitten", width: 290, height: 180 },
        url: "#",
      },
      {
        title: "Planting the seeds to 400% growth",
        description: "If you’re rapidly expanding, how do you go about managing market entry speed – and spend?",
        category: "Life & Travel",
        author: "Marie Gruen",
        date: "January 30, 2024",
        image: { src: "https://placekitten.com/290/180", alt: "Kitten", width: 290, height: 180 },
        url: "#",
      },
      {
        title: "The power of flexibility: How to balance for the future",
        description: "We all know achieving a healthy balance between work and family can be challenging for working parents and careers.",
        category: "Life & Travel",
        author: "Marie Gruen",
        date: "January 30, 2024",
        image: { src: "https://placekitten.com/290/180", alt: "Kitten", width: 290, height: 180 },
        url: "#",
      },
      {
        title: "Meet Robo-Advisor, a hands-off way to invest",
        description: "Build your wealth the smart way. Invest effortlessly, with our all-new Robo-Advisor — get your own diversified portfolio in minutes.",
        category: "Life & Travel",
        author: "Marie Gruen",
        date: "January 30, 2024",
        image: { src: "https://placekitten.com/290/180", alt: "Kitten", width: 290, height: 180 },
        url: "#",
      },
      {
        title: "Planting the seeds to 400% growth",
        description: "If you’re rapidly expanding, how do you go about managing market entry speed – and spend?",
        category: "Life & Travel",
        author: "Marie Gruen",
        date: "January 30, 2024",
        image: { src: "https://placekitten.com/290/180", alt: "Kitten", width: 290, height: 180 },
        url: "#",
      },
      {
        title: "The power of flexibility: How to balance for the future",
        description: "We all know achieving a healthy balance between work and family can be challenging for working parents and careers.",
        category: "Life & Travel",
        author: "Marie Gruen",
        date: "January 30, 2024",
        image: { src: "https://placekitten.com/290/180", alt: "Kitten", width: 290, height: 180 },
        url: "#",
      },
      {
        title: "Meet Robo-Advisor, a hands-off way to invest",
        description: "Build your wealth the smart way. Invest effortlessly, with our all-new Robo-Advisor — get your own diversified portfolio in minutes.",
        category: "Life & Travel",
        author: "Marie Gruen",
        date: "January 30, 2024",
        image: { src: "https://placekitten.com/290/180", alt: "Kitten", width: 290, height: 180 },
        url: "#",
      },
      {
        title: "Planting the seeds to 400% growth",
        description: "If you’re rapidly expanding, how do you go about managing market entry speed – and spend?",
        category: "Life & Travel",
        author: "Marie Gruen",
        date: "January 30, 2024",
        image: { src: "https://placekitten.com/290/180", alt: "Kitten", width: 290, height: 180 },
        url: "#",
      },
    ]);
  }, []);

  return (
    <BlogListingContext.Provider value={blogListingContext}>
      <div className="mt-32">
        <ListingFilters />
        <BlogListing />
      </div>
    </BlogListingContext.Provider>
  );
};
export default BlogListingBlock;
