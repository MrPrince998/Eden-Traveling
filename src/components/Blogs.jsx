import React from "react";
import { BlogArticle } from "../data/BlogArticle";
import { Link, useParams } from "react-router-dom";

const Blogs = () => {
  const { id } = useParams();
  return (
    <div className="px-2 lg:w-full max-w-screen-md mx-auto">
      <h1 className="font-bebas text-[28px] letter-gray text-center">
        RELATED ARTICLES
      </h1>
      <div className="grid w grid-cols-1 py-16 px-2 gap-y-6 w-full md:grid-cols-2 md:gap-6 lg:grid-cols-3 md:gap-y-6">
        {BlogArticle.filter((item) => item.id.toString() !== id) // filter out current blog
          .map((item) => (
            <Link key={item.id} to={`/blog/${item.id}`}>
              <div className="flex flex-col gap-y-4 justify-start">
                <img
                  src={item.background}
                  alt={item.title}
                  className="object-cover w-full min-w-[372px] min-h-[374px] lg:min-w-[58px] rounded-md hover:transition hover:ease-in-out hover:scale-100"
                />
                <h2 className="font-bebas text-lg text-[rgba(16,21,46,1)]">
                  {item.title}
                </h2>
                <p className="line-clamp-3">{item.content.intro}</p>
                <p>By {item.author.name}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Blogs;
