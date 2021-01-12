import React from "react";
import "./style.css";

function SearchBar(props) {

  return (
    <form>
    <div className="form-group">
      <label htmlFor="search">Search: </label>
      <input
      onChange={props.handleInputChange}
      value={props.search}
      name="search"
      type="text"
      className="form-control"
      placeholder="Search by Name"
      id="search"
      />
    </div>
    </form>
  );
}

export default SearchBar;
