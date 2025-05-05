import React, { createContext, useState } from "react";
import { TourData } from "../data/TourData";

export const TourFilterContext = createContext();

const TourFilterProvider = ({ children }) => {
  const [searchData, setSearchData] = useState("");
  const [isFilterClicked, setisFilterClicked] = useState(false);
  const [filteredData, setFilteredData] = useState(TourData || []);

  // Individual filter handlers
  const inputhandler = (e) => {
    const value = e.target.value;
    setSearchData(value);
    const filtered = TourData.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const filterByPriceRange = (priceRange) => {
    let min = 0;
    let max = Infinity;

    switch (priceRange) {
      case "Under $500":
        max = 500;
        break;
      case "$500 - $1000":
        min = 500;
        max = 1000;
        break;
      case "$1000 - $2000":
        min = 1000;
        max = 2000;
        break;
      case "Luxury":
        min = 2000;
        break;
      default:
        break;
    }
    return { min, max };
  };

  const filterByRating = (ratingValue) => {
    const match = ratingValue.match(/^(\d+)/); // Matches the number at the beginning
    const minRating = match ? parseInt(match[0]) : 0; // If found, parse the number; else, set 0
    return minRating;
  };

  const filterByDestination = (destination) => {
    return destination.toLowerCase();
  };

  // Combined filtering function
  const applyFilters = (filters) => {
    let filtered = [...TourData];

    // Apply Search filter
    if (filters.searchData) {
      filtered = filtered.filter((tour) =>
        tour.title.toLowerCase().includes(filters.searchData.toLowerCase())
      );
    }

    // Apply Price Range filter
    if (filters.priceRange) {
      const { min, max } = filterByPriceRange(filters.priceRange);
      filtered = filtered.filter(
        (tour) => tour.price >= min && tour.price <= max
      );
    }

    // Apply Rating filter
    if (filters.rating) {
      const minRating = filterByRating(filters.rating);
      filtered = filtered.filter((tour) => tour.rating >= minRating);
    }

    // Apply Destination filter
    if (filters.destination) {
      const destination = filterByDestination(filters.destination);
      filtered = filtered.filter(
        (tour) => tour.destination.toLowerCase() === destination
      );
    }

    setFilteredData(filtered);
  };

  return (
    <TourFilterContext.Provider
      value={{
        isFilterClicked,
        setisFilterClicked,
        filteredData,
        setFilteredData,
        inputhandler,
        applyFilters, // Expose combined filter function
        searchData,
        setSearchData,
      }}
    >
      {children}
    </TourFilterContext.Provider>
  );
};

export default TourFilterProvider;
