import { useContext } from "react";
import BlogPostCard from "../../blog-post-block";
import { BlogListingContext } from "..";
import { motion } from "framer-motion";

const BlogListing = () => {
  const { currentItems } = useContext(BlogListingContext);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16 lg:mt-32">
      {currentItems.map((item, index) => (
        <motion.div
          key={item.title + index}
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
    </div>
  );
};

export default BlogListing;
