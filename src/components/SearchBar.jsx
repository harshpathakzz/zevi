import React, { useState, useContext } from "react";
import "./SearchBar.scss";
import SearchIcon from "@mui/icons-material/Search";
import { FilterContext } from "../context/FilterContext";

const SearchBar = () => {
  const { dispatch } = useContext(FilterContext);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearchChange = (searchQuery) => {
    dispatch({
      type: "UPDATE_SEARCH_QUERY",
      searchQuery: searchQuery,
    });
    setShowSuggestions(false);
  };

  const handleInputClick = () => {
    setShowSuggestions(true);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        onClick={handleInputClick}
        onChange={(e) => handleSearchChange(e.target.value)}
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
          <p>Popular Suggestion 1</p>
          <p>Popular Suggestion 2</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
