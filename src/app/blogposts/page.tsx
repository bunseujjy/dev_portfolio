import React from "react";
import BlogPosts from "./BlogPost";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Posts",
  description: "Some of the blog posts that related to frontend",
};

const BlogPage = () => {
  return <BlogPosts />;
};

export default BlogPage;
