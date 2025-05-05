import React, { useEffect, useState } from "react";
import { ArticlesData } from "../data/ArticlesData";
import NavBar from "./NavBar";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const SingleArticles = () => {
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const index = ArticlesData.findIndex((item) => item.id === id);
    if (index !== -1) {
      setCurrentArticleIndex(index);
    }
  }, [id]);

  const currentArticle = ArticlesData[currentArticleIndex];

  return (
    <>
      <NavBar />
      <div className="p-4 max-w-4xl mx-auto">
        <img
          src={currentArticle.image}
          alt={currentArticle.title}
          className="h-80 w-full object-cover rounded-xl mb-6"
        />
        <h1 className="text-4xl font-bold mb-2">{currentArticle.title}</h1>
        <p
          className="text-gray-500 mb-4"
          dangerouslySetInnerHTML={{ __html: currentArticle.description }}
        ></p>
        <p className="text-base mb-6">{currentArticle.long_description}</p>

        <div className="flex items-center gap-4 mb-8">
          <p className="font-bold">Share with:</p>
          <Link
            to={"https://www.facebook.com"}
            className="cursor-pointer text-blue-600"
          >
            <FaFacebook />
          </Link>
          <Link
            to={"https://www.instagram.com/"}
            className="cursor-pointer text-pink-600"
          >
            <FaInstagram />
          </Link>
          <Link
            to={"https://www.x.com"}
            className="cursor-pointer text-blue-600"
          >
            <FaTwitter />
          </Link>
          <Link
            to={"https://www.youtube.com"}
            className="cursor-pointer text-red-600"
          >
            <FaYoutube />
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <FaArrowAltCircleLeft
            className="text-4xl cursor-pointer"
            onClick={() =>
              setCurrentArticleIndex(
                (currentArticleIndex - 1 + ArticlesData.length) %
                  ArticlesData.length
              )
            }
          />
          <FaArrowAltCircleRight
            className="text-4xl cursor-pointer"
            onClick={() =>
              setCurrentArticleIndex(
                (currentArticleIndex + 1) % ArticlesData.length
              )
            }
          />
        </div>
      </div>
    </>
  );
};

export default SingleArticles;
