import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

const priceRanges = [
  { label: "Under $100", min: 0, max: 100 },
  { label: "$100 - $300", min: 100, max: 300 },
  { label: "$300 - $500", min: 300, max: 500 },
  { label: "$500 - $1000", min: 500, max: 1000 },
  { label: "Over $1000", min: 1000, max: Infinity },
  // Add more price ranges as needed
];

const brands = ["Nike", "Puma", "Zara", "HRX", "H&M"];

const ratings = [1, 2, 3, 4, 5]; // Added more rating options

const Filter = () => {
  const { state, dispatch } = useContext(FilterContext);

  const handleBrandChange = (brand) => {
    const updatedBrands = state.filters.brands.includes(brand)
      ? state.filters.brands.filter((b) => b !== brand)
      : [...state.filters.brands, brand];

    dispatch({
      type: "UPDATE_BRAND_FILTER",
      brands: updatedBrands,
    });
  };

  const handlePriceChange = (priceRange) => {
    const updatedPriceRange = state.filters.priceRange.includes(priceRange)
      ? state.filters.priceRange.filter((p) => p !== priceRange)
      : [...state.filters.priceRange, priceRange];

    dispatch({
      type: "UPDATE_PRICE_FILTER",
      priceRange: updatedPriceRange,
    });
  };

  const handleRatingChange = (rating) => {
    let updatedRating;

    // Toggle the selected rating
    updatedRating = state.filters.rating.includes(rating)
      ? state.filters.rating.filter((r) => r !== rating)
      : [...state.filters.rating, rating];

    dispatch({
      type: "UPDATE_RATING_FILTER",
      rating: updatedRating,
    });
  };

  return (
    <div>
      <h3>Brands</h3>
      {brands.map((brand) => (
        <div key={brand}>
          <label>
            <input
              type="checkbox"
              checked={state.filters.brands.includes(brand)}
              onChange={() => handleBrandChange(brand)}
            />
            {brand}
          </label>
        </div>
      ))}

      <h3>Price Range</h3>
      {priceRanges.map((range, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              checked={state.filters.priceRange.includes(range)}
              onChange={() => handlePriceChange(range)}
            />
            {range.label}
          </label>
        </div>
      ))}

      <h3>Ratings</h3>
      {ratings.map((rating) => (
        <div key={rating}>
          <label>
            <input
              type="checkbox"
              checked={state.filters.rating.includes(rating)}
              onChange={() => handleRatingChange(rating)}
            />
            {rating} star & up
          </label>
        </div>
      ))}
    </div>
  );
};

export default Filter;
