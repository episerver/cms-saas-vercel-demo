"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export type BlogPostProps = {
  title: string;
  description: string;
  author?: string;
  published?: string;
  category: string;
  url: string;
  id: string;
  image: { src: string; alt: string; width: number; height: number };
};

type BlogPostCardProps = {
  blogPost: BlogPostProps;
};

type DateTimeFormatOptions = {
  year?: "numeric" | "2-digit";
  month?: "numeric" | "2-digit" | "narrow" | "short" | "long";
  day?: "numeric" | "2-digit";
};

const formatDate = (dateString?: string | null): any => {
  if (!dateString) {
    return null;
  }

  const options: DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = new Date(dateString).toLocaleDateString(
    "en-US",
    options
  );
  return formattedDate;
};

const BlogPostCard: React.FC<BlogPostCardProps> = ({ blogPost }) => {
  const { title, description, author, published, category, url, image } =
    blogPost;
  const [date, setDate] = useState<string>("");
  // Use blog posts fields to generate the fields needed.

  useEffect(() => {
    setDate(formatDate(published));
  }, [published]);

  return (
    <Link href={url} className="relative w-full">
      <article className="prose max-w-none p-8 pb-16 bg-white rounded-[20px] w-full h-full before:content-[''] before:absolute before:top-[1px] before:left-[1px] before:w-[calc(100%-2px)] before:h-[calc(100%-2px)] before:z-[-1] before:rounded-[20px] before:bg-azure before:transition-transform before:ease-in-out before:duration-300 hover:before:translate-x-8 hover:before:translate-y-8 focus:before:translate-x-8 focus:before:translate-y-8 dark:bg-vulcan-85 dark:text-ghost-white">
        {image && image.src ? (
          <Image
            className="w-full rounded-[20px]"
            src={image.src}
            alt={image.alt ?? ""}
            width={620}
            height={430}
          />
        ) : (
          <div className="max-w-full rounded-[20px] bg-light-grey pb-[69.35%] w-[620px] mb-[2em]"></div>
        )}
        {category ? (
          <p className="text-[12px] uppercase tracking-[2px] text-azure mb-[8px]">
            {category}
          </p>
        ) : null}
        {author || date ? (
          <div className="flex justify-between mb-[16px]">
            {author ? (
              <p className="text-[12px] text-pale-sky my-0">by {author}</p>
            ) : null}
            {date ? (
              <p className="text-[12px] text-pale-sky my-0">{date}</p>
            ) : null}
          </div>
        ) : null}
        {title ? <h3 className="my-0 mt-[16px]">{title}</h3> : null}
        {description ? <p>{description}</p> : null}
      </article>
    </Link>
  );
};

export default BlogPostCard;
