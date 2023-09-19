import React from "react";
import "../styles/components/searchBar.scss";

function SearchBar({ searchByTag, setSearchByTag }) {
  const handleSearch = (e) => {
    setSearchByTag(e.target.value);
  };

  return (
    <>
      <form className="rah">
        <input
          type="text"
          placeholder="Search images by tag..."
          value={searchByTag}
          onChange={handleSearch}
          className="search-bar"
        />
      </form>
    </>
  );
}

export default SearchBar;
