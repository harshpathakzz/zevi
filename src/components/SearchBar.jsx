import React, { useState, useContext, useEffect, useRef } from "react";
import "./SearchBar.scss";
import SearchIcon from "@mui/icons-material/Search";
import { FilterContext } from "../context/FilterContext";
import { faker } from "@faker-js/faker";
import debounce from "lodash/debounce";

const SearchBar = () => {
  const { dispatch } = useContext(FilterContext);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchContainerRef = useRef(null);

  const debouncedHandleSearchChange = debounce((searchQuery) => {
    dispatch({
      type: "UPDATE_SEARCH_QUERY",
      searchQuery: searchQuery,
    });
    setShowSuggestions(false);
    setSearchValue(searchQuery);
  }, 300);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (event) => {
    const searchQuery = event.target.value;
    setSearchValue(searchQuery);
    setShowSuggestions(false);
    debouncedHandleSearchChange(searchQuery);
  };

  const handleInputClick = () => {
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchValue(suggestion);
    debouncedHandleSearchChange(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="search-bar" ref={searchContainerRef}>
      <input
        type="text"
        placeholder="Search"
        onClick={handleInputClick}
        onChange={handleInputChange}
        value={searchValue}
      />
      <SearchIcon />
      {showSuggestions && (
        <div className="suggestions-container">
          <h3>Latest Trends</h3>
          <div className="latest-trends">
            <div className="product-container">
              <div className="product-image">
                <img
                  src={faker.image.urlLoremFlickr({ category: "fashion" })}
                  alt="Trend 1"
                />
              </div>
              <p>Tshirt</p>
            </div>
            <div className="product-container">
              <div className="product-image">
                <img
                  src={faker.image.urlLoremFlickr({ category: "fashion" })}
                  alt="Trend 2"
                />
              </div>
              <p>Jacket</p>
            </div>
          </div>

          <h3>Popular Suggestions</h3>
          <p onClick={() => handleSuggestionClick("Denim Jacket")}>
            Denim Jacket
          </p>
          <p onClick={() => handleSuggestionClick("Skirt")}>Skirt</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
