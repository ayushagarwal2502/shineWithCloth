import React from "react";
import "../styles/Products.css";
import {  useDispatch } from "react-redux";
import { productsActions } from "../store/products-slice";
import { cartActions } from "../store/cart-slice";

const Product = ({
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

  const addToCart = (idx) => {
    dispatch(
      productsActions.updateStock({
        updateIndex: idx,
       
      })
      
    );

    dispatch(
      cartActions.addToBasket({
        id,
        imageURL,
        name,
        type,
        price,
        color,
        gender,
        quantity,
      })
    );
  };

  return (
    <div className="product">
      <div className="productTag">
        <h2>
          {name}({gender})
        </h2>
        <img src={imageURL} alt={name} />
        <h5>Available: {quantity}</h5>
      </div>
      <div className="priceTag">
        <h3>Rs.{price}/-</h3>
        {quantity !== 0 ? (
          <h4
            onClick={(e) => {
              e.preventDefault();
              addToCart(id);
            }}
          >
            Add to cart
          </h4>
        ) : (
          <button disabled>Out of stock</button>
        )}
      </div>
    </div>
  );
};

export default Product;
