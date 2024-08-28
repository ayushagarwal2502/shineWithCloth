import React from "react";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const navigate = useNavigate();
  //const dispatch=useDispatch();
  const handleLogout=()=>{
    if(window.confirm('Are You sure to Logout')){
     signOut(auth).then(()=>{
      // dispatch(logout())
      navigate("/");
      console.log("Logged Out")
     }).catch((error)=>{
       console.log("error");
     })
    }
   }
  return (
    <div className="navBar">
      <h1
      onClick={handleLogout}
      >Clothes Store</h1>
      <div className="account">
        <h2
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Products
        </h2>
        <h2
          onClick={() => {
            navigate("/cart");
          }}
        >
          Cart
        </h2>
      </div>
    </div>
  );
};

export default Navbar;
