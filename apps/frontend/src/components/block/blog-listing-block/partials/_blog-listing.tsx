import { useContext } from "react";
import BlogPostCard from "../../blog-post-block";
import { BlogListingContext } from "../blog-listing-block";
import { motion } from "framer-motion";
import ContentLoader from "react-content-loader";

const Placeholder = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={416}
    viewBox="0 0 400 516"
    backgroundColor="#e0e0e0"
    foregroundColor="#ecebeb"
    preserveAspectRatio="none"
    {...props}
  >
    <rect x="20" y="20" rx="20" ry="20" width="360" height="240" />
    <rect x="19" y="280" rx="0" ry="0" width="356" height="19" />
    <rect x="20" y="310" rx="0" ry="0" width="356" height="19" />
    <rect x="20" y="341" rx="0" ry="0" width="356" height="19" />
    <rect x="21" y="371" rx="0" ry="0" width="356" height="19" />
    <rect x="20" y="401" rx="0" ry="0" width="356" height="19" />
    <rect x="21" y="431" rx="0" ry="0" width="356" height="19" />
  </ContentLoader>
);

const BlogListing = () => {
  const { currentItems, showFilters, isLoading, pageSize } =
    useContext(BlogListingContext);

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-3 gap-10 ${
        showFilters ? "mt-16 lg:mt-32" : ""
      }`}
    >
      {currentItems.map((item, index) => (
        <motion.div
          key={item.id}
          layout="position"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: {
              duration: 1,
              ease: "easeInOut",
            },
            layout: { duration: 0.6, ease: "easeInOut" },
          }}
        >
          <BlogPostCard blogPost={item} />
        </motion.div>
      ))}
      {isLoading &&
        showFilters &&
        Array.from({ length: pageSize - currentItems.length }).map(
          (_, index) => (
            <motion.div
              key={index}
              layout="position"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: {
                  duration: 1,
                  ease: "easeInOut",
                },
                layout: { duration: 0.6, ease: "easeInOut" },
              }}
            >
              <Placeholder uniqueKey="blog-placeholder" className="w-full" />
            </motion.div>
          )
        )}
    </div>
  );
};

export default BlogListing;
