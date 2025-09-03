import React from "react";
import { Badge } from "./ui/badge";
import { useState } from "react";
import BlogCard from "./BlogCard";
import { blog_data } from "../assets/blog_data";

const blogCategories = [
  "All",
  "Technology",
  "Health",
  "Travel",
  "Food",
  "Lifestyle",
  "Finance",
  "Education",
  "Entertainment",
  "Sports",
];

const BlogList = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  return (
    <div>
      <div className="flex justify-center gap-4 sm:gap-8 my-10 relative ">
        {blogCategories.map((item) => (
          <div key={item} className="relative">
            <Badge
              onClick={() => setActiveCategory(item)}
              className={`cursor-pointer items-center  ${
                activeCategory === item
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground"
              }`}
            >
                {item}
            </Badge>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40">
        {blog_data
          .filter((blog) =>
            activeCategory === "All" ? true : blog.category === activeCategory
          )
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
      </div>
    </div>
  );
};

export default BlogList;
