import React, { useContext, useState } from "react";
import NavBar from "./NavBar";
import heroImage from "../assets/images/hero image background.png";
import { TourFilterContext } from "../context/TourFilterProvider";
import { Link } from "react-router-dom";
import { TourData } from "../data/TourData";

const HeroSection = () => {
  const [currentDestination, setCurrentDestination] = useState("");
  const { setFilteredData } = useContext(TourFilterContext);

  const inputhandler = (e) => {
    const value = e.target.value;
    setCurrentDestination(value);
    const filtered = TourData.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };
  return (
    <main className="relative">
      <div
        className="bg-cover bg-left h-[463px] lg:min-h-[730px] lg:100% lg:max-h-[942px] w-full transition-all duration-300 ease-in-out"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <NavBar textColor="text-white" />
        <div className="lg:absolute text-white text-center px-2 flex flex-col items-center mx-auto lg:px-[100px] sm:w-150 lg:w-190 lg:top-50 lg:right-14 md:my-12">
          <h1 className="transition-all duration-500 ease-in-out text-4xl w-80 md:w-full sm:text-5xl font-bold font-playfair my-4">
            Welcome to the World of Extraordinary Travel
          </h1>
          <p className="text-xl my-2 md:w-150">
            If you're in search of exciting adventures, unforgettable
            experiences, and breathtaking places to explore, you've come to the
            right place!
          </p>
        </div>
      </div>
      <section className="bg-[#025951] text-white py-10 px-5 lg:bg-black/70 lg:backdrop-blur-sm lg:absolute lg:bottom-0 w-full">
        <h2 className="mb-6 text-3xl md:text-4xl font-bold text-center font-playfair">
          Plan your travel now
        </h2>
        <form className="flex flex-col gap-6 lg:grid lg:grid-cols-5 lg:gap-5 mx-auto max-w-7xl">
          <div>
            <label className="block mb-1 text-sm font-semibold">
              Search Destination*
            </label>
            <input
              type="text"
              placeholder="Enter Destination"
              value={currentDestination}
              onChange={inputhandler}
              className="w-full h-[50px] rounded-lg px-4 bg-white text-black"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold">
              Pax Number*
            </label>
            <input
              type="text"
              placeholder="No. of People"
              className="w-full h-[50px] rounded-lg px-4 bg-white text-black"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold">
              Checkin Date*
            </label>
            <input
              type="date"
              className="w-full h-[50px] rounded-lg px-4 bg-white text-black"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold">
              Checkout Date*
            </label>
            <input
              type="date"
              className="w-full h-[50px] rounded-lg px-4 bg-white text-black"
            />
          </div>
          <Link
            to="/tour"
            className="h-[50px] bg-[#17C3B2] rounded-full flex items-center justify-center font-semibold text-white hover:bg-[#149e94] transition-colors"
          >
            Search
          </Link>
        </form>
      </section>
    </main>
  );
};

export default HeroSection;
