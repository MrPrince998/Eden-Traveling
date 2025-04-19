import React from "react";
import NavBar from "../components/NavBar";
import Blogs from "../components/Blogs";
import BlogCard from "../components/BlogCard";

const BlogPage = () => {
  return (
    <>
      <NavBar textColor="text-black" navColor="text-white" />
      <BlogCard />
      <Blogs />
    </>
  );
};

export default BlogPage;
