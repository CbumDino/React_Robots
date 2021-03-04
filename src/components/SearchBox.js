import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="bg-lightest-blue ba b--green pa3"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
