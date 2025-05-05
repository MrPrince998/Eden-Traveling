import React from "react";
import { ArticlesData } from "../data/ArticlesData";
import { Link, useParams } from "react-router-dom";

const ArticleCard = ({ data }) => {

  return (
    <>
      {ArticlesData.slice(0, data).map((item, i) => {
        return (
          <Link to={`/article/${item.id}`}>
            <div key={i} className="flex gap-x-2 mb-[30px] items-center">
              <img
                src={item.image}
                alt="image"
                className="w-28 h-28 rounded-lg object-cover"
              />
              <div>
                <p
                  className="letter-gray font-medium"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
                <p className="letter-blue font-bold text-sm">{item.date}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default ArticleCard;
{
  ArticlesData.map((item, i) => {
    return (
      <div key={i} className="flex gap-x-2 mb-[30px] items-center">
        <img src={item.image} alt="image" className="w-26 h-26 rounded-lg" />
        <div>
          <p className="letter-gray font-medium">{item.description}</p>
          <p className="letter-blue font-bold text-sm">{item.date}</p>
        </div>
      </div>
    );
  });
}
