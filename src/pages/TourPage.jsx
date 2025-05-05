import React, { useContext } from "react";
import { TourFilterContext } from "../context/TourFilterProvider";
import NavBar from "../components/NavBar";
import { FaLocationDot } from "react-icons/fa6";
import { IoFilter } from "react-icons/io5";
import FilterCard from "../components/FilterCard";
import { TourData } from "../data/TourData";
import Footer from "../components/Footer";

const TourPage = () => {
  const {
    searchData,
    isFilterClicked,
    setisFilterClicked,
    filteredData,
    setFilteredData,
    inputhandler,
  } = useContext(TourFilterContext); // ✅ pull from context

  return (
    <section>
      <NavBar textColor="text-black" navColor="text-white" />
      <div className="flex gap-x-2 mb-4 items-center shadow-md py-4 px-3 bg-[rgba(23,195,178,1)]">
        <FaLocationDot className="text-xl" />
        <h1 className="font-bold text-3xl">Tour Explorer</h1>
      </div>

      <div className="mx-2">
        <div className="flex gap-x-3 items-center">
          <input
            type="text"
            name="data"
            className="placeholder:text-gray-500 w-full rounded-lg py-2 px-3 border-1 border-gray-500"
            placeholder="Search destinations..."
            onChange={inputhandler}
            value={searchData}
          />
          <button
            onClick={() => setisFilterClicked(!isFilterClicked)}
            className="py-1 px-4 bg-[rgba(23,195,178,1)] rounded-md"
          >
            <IoFilter className="text-3xl" />
          </button>
          <button
            onClick={() => setFilteredData(TourData)}
            className="py-2 px-4 bg-red-500 text-white rounded-md shadow-md"
          >
            Reset
          </button>
        </div>

        {isFilterClicked && <FilterCard />}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 my-4 text-center">
          {filteredData.length > 0 ? (
            filteredData.map((item, i) => (
              <div
                key={i}
                className="bg-[#d2d2d2] rounded-md min-w-[328px] w-full px-3 py-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-md mx-auto w-full h-48 object-cover"
                />
                <h2 className="font-medium mt-2">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-red-600 col-span-4">
              No results found.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default TourPage;
