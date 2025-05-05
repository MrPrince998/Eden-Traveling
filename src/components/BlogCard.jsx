import React, { useEffect } from "react";
import { BlogArticle } from "../data/BlogArticle";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const BlogCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  //select blog
  const selectedBlog = BlogArticle.find((blog) => blog.id.toString() === id);

  //current index
  const currentIndex = BlogArticle.findIndex(
    (blog) => blog.id.toString() === id
  );
  const prevIndex =
    (currentIndex - 1 + BlogArticle.length) % BlogArticle.length;
  const prevBlog = BlogArticle[prevIndex];
  const nextIndex = (currentIndex + 1) % BlogArticle.length;
  const nextBlog = BlogArticle[nextIndex];

  useEffect(() => {
    if (location.pathname === "/blog") {
      navigate("/blog/1", { replace: true });
    }
  }, [location.pathname, navigate]);

  //if selected blog is not there then,
  if (!selectedBlog) {
    return (
      <p className="text-center text-red-500 font-bold">Blog not found!</p>
    );
  }

  return (
    <section id="blog">
      <div key={selectedBlog.id}>
        <h1 className="font-bebas text-center text-3xl mt-4 lg:text-5xl max-w-screen-md mx-auto">
          {selectedBlog.title}
        </h1>
        <div className="pt-16 w-full">
          <img
            src={selectedBlog.background}
            alt={selectedBlog.title}
            className="w-full h-[134px] object-cover md:h-[266px] "
          />
          <div className="px-[8px] max-w-screen-md mx-auto">
            <div className="flex justify-between items-start py-6 border-b-[0.4px] border-gray-500 ">
              <div className="flex gap-x-[10px]">
                <img
                  src={selectedBlog.author.image}
                  alt={selectedBlog.author.name}
                  className="w-8 h-8"
                />
                <h2 className="font-semibold font-lato letter-gray-600">
                  {selectedBlog.author.name}
                </h2>
              </div>
              <div>
                <h2 className="letter-gray-600 font-semibold font-lato">
                  {selectedBlog.published_on}
                </h2>
                <p className="letter-gray-300 text-sm text-end">
                  -{selectedBlog.reading_time}
                </p>
              </div>
            </div>
            <p className="letter-gray-600 my-1">{selectedBlog.content.intro}</p>
            <h1 className="font-bebas text-3xl letter-gray my-3">
              TOP EXPERIENCES
            </h1>
            {selectedBlog.content.top_experiences.map((data, a) => (
              <div key={a}>
                <h3 className="font-lato font-bold text-lg letter-gray">
                  {data.place}
                </h3>
                <p className="letter-gray-600 my-1">{data.description}</p>
              </div>
            ))}
            <p className="my-1">
              <b>LOCAL BITE:</b> {selectedBlog.content.local_bite}
            </p>
            <p className="my-1">
              <b>PRO TIP:</b> {selectedBlog.content.pro_tip}
            </p>
          </div>
        </div>
      </div>
      <div className="px-6 pt-6 flex flex-col items-center border-t-1 border-b-1 border-gray-400 my-8 lg:mx-[336px]">
        <h1 className="font-lato font-light text-lg letter-gray-600 mb-[10px]">
          About {selectedBlog.author.name}
        </h1>
        <img
          src={selectedBlog.author.image}
          alt={selectedBlog.author.name}
          className="w-[100px] h-[100px]"
        />
        <p className="letter-gray-600 font-light italic">
          {selectedBlog.author.bio}
        </p>
      </div>
      <div className="pt-8 px-[8px] flex justify-around pb-8 max-w-screen-md mx-auto">
        <Link to={`/blog/${prevBlog.id}`} className="">
          <button className="flex items-center gap-x-[10px] border-1 rounded-[2px] py-2 px-4">
            <BsArrowLeftCircle /> Previous
          </button>
          <p>{prevBlog.title}</p>
        </Link>
        <Link to={`/blog/${prevBlog.id}`} className="text-end">
          <button className="flex items-center justify-self-end gap-x-[10px] border-1 rounded-[2px] py-2 px-4">
            <BsArrowRightCircle /> Next
          </button>
          <p>{nextBlog.title}</p>
        </Link>
      </div>
    </section>
  );
};

export default BlogCard;
