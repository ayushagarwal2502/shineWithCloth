
import React, { useState } from "react";
import "../styles/Searchbar.css";
import {  useDispatch } from "react-redux";
import { productsActions } from "../store/products-slice";

const Filterbox = () => {
  const dispatch = useDispatch();
 const [searchTerm, setSearchTerm] = useState("");

 const submit=()=>{
 // e.preventDefault();
  dispatch(
    productsActions.updateSearchTerm({
      currentTerm: searchTerm,
    })
  );
 }

  return (
    <div className="filterBox">
       <div className="colorBox">
        <h2>Color</h2>

        <div>
          <input type="checkbox"  value="red"  onChange={(e)=>setSearchTerm(e.target.value)} />
          <label>Red</label>
        </div>

        <div>
          <input type="checkbox" value="blue" onChange={(e)=>setSearchTerm(e.target.value)} />
          <label>Blue</label>
        </div>

        <div>
          <input type="checkbox" onChange={(e)=>setSearchTerm(e.target.value)} value ="green" />
          <label>Green</label>
        </div>
      </div>

      <div className="genderBox">
        <h2>Gender</h2>

        <div>
          <input type="checkbox" value="Men" onChange={(e)=>setSearchTerm(e.target.value)}/>
          <label>Male</label>
        </div>

        <div>
          <input type="checkbox" value="Women" onChange={(e)=>setSearchTerm(e.target.value)}/>
          <label>Female</label>
        </div>
      </div>

      <div className="priceBox">
        <h2>Price</h2>

        <div>
          <input type="checkbox" />
          <label>0 - 250</label>
        </div>

        <div>
          <input type="checkbox" />
          <label>251 - 450</label>
        </div>

        <div>
          <input type="checkbox" />
          <label>Above 450</label>
        </div>
      </div>

      <div className="typeBox">
        <h2>Type</h2>

        <div>
          <input type="checkbox" value="Polo" onChange={(e)=>setSearchTerm(e.target.value)}/>
          <label>Polo</label>
        </div>

        <div>
          <input type="checkbox" value="Hoodie" onChange={(e)=>setSearchTerm(e.target.value)}/>
          <label>Hoodie</label>
        </div>

        <div>
          <input type="checkbox" value="Basic" onChange={(e)=>setSearchTerm(e.target.value)}/>
          <label>Basic</label>
        </div>
      </div>
      <button onClick={submit} >Submit</button>
     
    </div>
  );
};
export default Filterbox;
