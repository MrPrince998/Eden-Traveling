import React from "react";
import japaneseTemple from "../assets/images/Rectangle 5755 (6).png";
import arrow from "../assets/images/Arrow 1.svg";
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";

const News = () => {
  return (
    <section className="py-[30px] px-5 bg-[#EDEDED] md:bg-white lg:px-24">
      <div>
        <h3 className="letter-blue font-medium text-lg mb-[10px] md:text-[20px]">
          EXPLORING
        </h3>
        <h1 className="font-playfair font-semibold text-4xl letter-gray mb-5 md:text-[50px]">
          News and Blog
        </h1>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-5">
        <div className="mb-[50px]">
          <Link to={"/article/e51e47bc-c7cf-4550-8f7d-1c81f9e2f479"}>
            <img
              src={japaneseTemple}
              alt="japnese temple"
              className="w-full max-w-[750px] min-w-[350px] h-auto md:max-h-[370px] md:object-cover rounded-2xl"
            />
          </Link>
          <h3 className="letter-blue font-bold text-lg">ASIA</h3>
          <h2 className="letter-gray font-bold text-2xl my-[10px]">
            Unveiling the Enchanting Beauty of Kyoto
          </h2>
          <p className="text-black text-lg">
            Join us on a virtual journey to one of Japan's most captivating
            cities – <b>Kyoto</b>. In our latest blog post, we'll immerse you in
            the mesmerizing world of ancient temples, tranquil gardens, and the
            timeless traditions that define this cultural gem.
          </p>
          <Link
            to={"/article/e51e47bc-c7cf-4550-8f7d-1c81f9e2f479"}
            className="letter-blue font-medium text-lg flex gap-x-2 items-center my-4 cursor-pointer"
          >
            Read full article <img src={arrow} />
          </Link>
        </div>
        <div>
          <ArticleCard data={4} />
          <Link
            to={"/article"}
            className="letter-blue font-medium text-lg flex gap-x-2 items-center cursor-pointer"
          >
            See full article <img src={arrow} />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default News;
