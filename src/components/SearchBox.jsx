import React, { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search drivers..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBox;
