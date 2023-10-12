import React, { useState, useContext, useEffect, useRef } from "react";
import "./SearchBar.scss";
import SearchIcon from "@mui/icons-material/Search";
import { FilterContext } from "../context/FilterContext";
import { faker } from "@faker-js/faker";

const SearchBar = () => {
  const { dispatch } = useContext(FilterContext);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchContainerRef = useRef(null);

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

  const handleSearchChange = (searchQuery) => {
    dispatch({
      type: "UPDATE_SEARCH_QUERY",
      searchQuery: searchQuery,
    });
    setShowSuggestions(false);
    setSearchValue(searchQuery);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchValue(suggestion);
    setShowSuggestions(false);
  };

  const handleInputClick = () => {
    setShowSuggestions(true);
  };

  return (
    <div className="search-bar" ref={searchContainerRef}>
      <input
        type="text"
        placeholder="Search"
        onClick={handleInputClick}
        onChange={(e) => handleSearchChange(e.target.value)}
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
              <p>Latest Trend 1</p>
            </div>
            <div className="product-container">
              <div className="product-image">
                <img
                  src={faker.image.urlLoremFlickr({ category: "fashion" })}
                  alt="Trend 2"
                />
              </div>
              <p>Latest Trend 2</p>
            </div>
          </div>

          <h3>Popular Suggestions</h3>
          <p onClick={() => handleSuggestionClick("Popular Suggestion 1")}>
            Popular Suggestion 1
          </p>
          <p onClick={() => handleSuggestionClick("Popular Suggestion 2")}>
            Popular Suggestion 2
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
