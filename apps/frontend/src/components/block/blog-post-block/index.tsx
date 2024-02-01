import Image from "next/image";
import Link from "next/link";

export type BlogPostProps = {
  title: string;
  description: string;
  author?: string;
  date?: string;
  category: string;
  url: string;
  image: { src: string; alt: string; width: number; height: number };
};

type BlogPostCardProps = {
  blogPost: BlogPostProps;
};

const BlogPostCard: React.FC<BlogPostCardProps> = ({ blogPost }) => {
  const { title, description, author, date, category, url, image } = blogPost;
  // Use blog posts fields to generate the fields needed.

  return (
    <Link href={url} className="relative w-full">
      <article className="prose max-w-none p-8 pb-16 bg-white rounded-[20px] w-full h-full before:content-[''] before:absolute before:top-[1px] before:left-[1px] before:w-[calc(100%-2px)] before:h-[calc(100%-2px)] before:z-[-1] before:rounded-[20px] before:bg-azure before:transition-transform before:ease-in-out before:duration-300 hover:before:translate-x-8 hover:before:translate-y-8 focus:before:translate-x-8 focus:before:translate-y-8">
        {image ? <Image className="w-full rounded-[20px]" src={image.src} alt={image.alt} width={image.width} height={image.height} /> : null}
        {category ? <p className="text-[12px] uppercase tracking-[2px] text-azure mb-[8px]">{category}</p> : null}
        {author || date ? (
          <div className="flex justify-between mb-[16px]">
            {author ? <p className="text-[12px] text-pale-sky my-0">{author}</p> : null}
            {date ? <p className="text-[12px] text-pale-sky my-0">{date}</p> : null}
          </div>
        ) : null}
        {title ? <h3 className="my-0 mt-[16px]">{title}</h3> : null}
        {description ? <p>{description}</p> : null}
      </article>
    </Link>
  );
};

export default BlogPostCard;
