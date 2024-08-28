import React, { useState } from "react";
import "../styles/Searchbar.css";
import SearchIcon from "../Images/search.png";
import { useDispatch } from "react-redux";
import { productsActions } from "../store/products-slice";

const Searchbox = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search for products.."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            dispatch(
              productsActions.updateSearchTerm({
                currentTerm: searchTerm,
              })
            );
          }
        }}
      />
      <img
        src={SearchIcon}
        alt="search-icon"
        onClick={() => {
          dispatch(
            productsActions.updateSearchTerm({
              currentTerm: searchTerm,
            })
          );
        }}
      />
    </div>
  );
};

export default Searchbox;
