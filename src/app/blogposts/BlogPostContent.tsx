import { icons } from "@/lib/icon";
import React from "react";

interface BlogPostContentProps {
  tabs: string;
}

const BlogPostContent = ({ tabs }: BlogPostContentProps) => {
  return (
    <div className="w-full h-full">
      {icons.mediumblog
        .filter((blog) => blog.title === tabs)
        .map((md, index) => (
          <div
            key={index}
            dangerouslySetInnerHTML={{ __html: md.blog as string }}
            className="text-white"
          />
        ))}
    </div>
  );
};

export default BlogPostContent;
