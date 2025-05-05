import React, { useContext, useState } from "react";
import { TourFilterContext } from "../context/TourFilterProvider";
import { TourData } from "../data/TourData";

const FilterCard = () => {
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [currentFilterSelected, setcurrentFilterSelected] = useState(false);

  const { applyFilters } = useContext(TourFilterContext);

  const uniqueDestinations = [
    ...new Set(TourData.map((tour) => tour.destination)),
  ];

  const handleSelection = (value, type) => {
    let filters = {
      destination: selectedDestination,
      rating: selectedRating,
      priceRange: selectedPrice,
    };

    switch (type) {
      case "destination":
        setSelectedDestination(value);
        filters.destination = value;
        break;
      case "rating":
        setSelectedRating(value);
        filters.rating = value;
        break;
      case "price":
        setSelectedPrice(value);
        filters.priceRange = value;
        break;
      default:
        break;
    }

    applyFilters(filters); // Call the combined filter function with selected filters
  };

  return (
    <div className="absolute bg-white shadow-md rounded-2xl p-6 space-y-6 w-full max-w-full">
      {/* Destination filter */}
      <div className="space-y-2">
        <h4 className="text-lg font-semibold text-gray-700">Destination</h4>
        <div className="flex flex-wrap gap-4">
          {uniqueDestinations.map((destination) => (
            <label
              key={destination}
              className="flex items-center gap-2 cursor-pointer text-sm text-gray-600"
            >
              <input
                type="radio"
                name="destination"
                id={destination}
                checked={selectedDestination === destination}
                onChange={() => handleSelection(destination, "destination")}
                onClick={() => setcurrentFilterSelected(!currentFilterSelected)}
                className="accent-blue-600"
              />
              {destination}
            </label>
          ))}
        </div>
      </div>

      {/* Rating filter */}
      <div className="space-y-2">
        <h4 className="text-lg font-semibold text-gray-700">Rating</h4>
        <div className="flex flex-wrap gap-4">
          {["4 stars & up", "3 stars & up", "2 stars & up"].map((rating) => (
            <label
              key={rating}
              className="flex items-center gap-2 cursor-pointer text-sm text-gray-600"
            >
              <input
                type="radio"
                name="rating"
                id={rating}
                checked={selectedRating === rating}
                onChange={() => handleSelection(rating, "rating")}
                className="accent-blue-600"
              />
              {rating}
            </label>
          ))}
        </div>
      </div>

      {/* Price range filter */}
      <div className="space-y-2">
        <h4 className="text-lg font-semibold text-gray-700">Price Range</h4>
        <div className="flex flex-wrap gap-4">
          {["Under $500", "$500 - $1000", "$1000 - $2000", "Luxury"].map(
            (price) => (
              <label
                key={price}
                className="flex items-center gap-2 cursor-pointer text-sm text-gray-600"
              >
                <input
                  type="radio"
                  name="price"
                  id={price}
                  checked={selectedPrice === price}
                  onChange={() => handleSelection(price, "price")}
                  className="accent-blue-600"
                />
                {price}
              </label>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
