import React, { useState, useContext, useEffect, useRef } from "react";
import "./SearchBar.scss";
import SearchIcon from "@mui/icons-material/Search";
import { FilterContext } from "../context/FilterContext";

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
          <div className="product-trend">
            <img src="product-image-url" alt="Product" />
            <p>Product Title</p>
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
