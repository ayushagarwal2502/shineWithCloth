import React from "react";
import Navbar from "./Navbar";
import { useSelector} from "react-redux";
import CartProduct from "./CartProduct";
import "../styles/CartProduct.css";
import { useNavigate } from "react-router-dom";


const Cart = () => {
 // const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.basket);
  const totalAmount = useSelector((state) => state.cart.totalPrice);
  const navigate = useNavigate();
  const CheckoutCart=()=>{
    
    navigate("/checkoutPage");
  }

  return (
    <div className="Checkout">
      <Navbar />
      <h1 style={{ margin: "4% 10% 0 10%", textDecoration: "underline" }}>
        Shopping Cart
      </h1>
      <div className="basket">
        {products.map((product) => {
          return <CartProduct key={product.id} {...product} />;
        })}
      </div>
      {products.length > 0 ? <hr style={{ margin: "0 15% 0 10%" }} /> : null}
      {products.length > 0 ? (
        <h3
          style={{
            fontSize: "40px",
            fontWeight: "800",
            margin: "4% 10% 0 25%",
            padding: "3% 5%",
          }}
        >
          Total amount &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rs.
          {totalAmount}{" "} 
         <br/> <hr></hr> <button onClick={CheckoutCart}>  Checkout</button>
        </h3>
      ) : null}
    </div>
  );
};

export default Cart;
