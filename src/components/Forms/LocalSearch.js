import React from "react";

const LocalSearch = ({ keyword, setKeyword }) => {
  const searchChangeHandler = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <input
      type="search"
      placeholder="Filter"
      value={keyword}
      onChange={searchChangeHandler}
      className="form-control mb-4"
    />
  );
};

export default LocalSearch;