import React from "react";
import "./SearchBar.scss";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = ({ onSearchChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <SearchIcon />
    </div>
  );
};

export default SearchBar;
