import React from "react";
import "../styles/CartProduct.css";
import { cartActions } from "../store/cart-slice";
import {  useDispatch } from "react-redux";

const CartProduct = ({
  id,
  imageURL,
  name,
  type,
  price,
  color,
  gender,
  quantity,
}) => {
  const dispatch = useDispatch();
  const increase =()=>{
    dispatch(
      cartActions.addToBasket({
        id,
      })
    );
  }
  const decrease =()=>{
    dispatch(
      cartActions.removeFromBasket({
        id,
      })
    );
  }
  const handleDelete = () => {
    dispatch(
      cartActions.removeFromBasket({
        id,
      })
    );
  };

  return (
    <div className="prodInBasket">
      <img src={imageURL} alt={name} />
      <span>
        {name}({gender})<br />
        Rs.{price}/-
      </span>
      <h2><button onClick={decrease}>-</button> Qty {quantity} <button onClick={increase}>+</button> </h2>
      <h3 onClick={handleDelete}>Delete</h3>
    </div>
  );
};

export default CartProduct;
