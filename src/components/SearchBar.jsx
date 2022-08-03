import React from "react";

const SearchBar = () => {
  return (
    <div className="py-12 px-8">
      <input
        className="w-full p-4 focus:outline-none"
        type="search"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
