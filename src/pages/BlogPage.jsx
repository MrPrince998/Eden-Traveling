import React from "react";
import NavBar from "../components/NavBar";
import Blogs from "../components/Blogs";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";

const BlogPage = () => {
  return (
    <>
      <NavBar textColor="text-black" navColor="text-white" />
      <BlogCard />
      <Blogs />
      <Footer />
    </>
  );
};

export default BlogPage;
