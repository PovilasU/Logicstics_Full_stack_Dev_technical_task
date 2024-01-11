import React, { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="row" style={{ marginBottom: "30px" }}>
      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          placeholder="Search drivers by Vehicle registration..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="col-auto">
        <button onClick={handleSearch} className="btn btn-primary">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
