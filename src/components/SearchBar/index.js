import React from "react";
import "./style.css";

function SearchBar(props) {


  return (
    
    <form className="form">
    <div className="form-group col-3">
      <label htmlFor="search">Search: </label>
      <input
      onChange={props.handleInputChange}
      value={props.searchInput}
      name="search"
      type="text"
      placeholder="Search by Name"
      />
    </div>
    </form>
  );
}

export default SearchBar;
