import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/CheckoutPage.css";
const CheckoutPage = () => {
  let navigate=useNavigate();
   const paymentPage=()=>{
    navigate("/cart");
   }
  return (
    <div className='container'>
       <h1>Shipping</h1>
  <p>Please enter your shipping details.</p>
  <hr />
  <div className="form">
    
  <div className="fields fields--2">
    <label className="field">
      <span className="field__label" for="firstname">First name</span>
      <input className="field__input" type="text" id="firstname"  />
    </label>
    <label className="field">
      <span className="field__label" for="lastname">Last name</span>
      <input className="field__input" type="text" id="lastname"  />
    </label>
  </div>
  <label className="field">
    <span className="field__label" for="address">Address</span>
    <input className="field__input" type="text" id="address" />
  </label>
  <label className="field">
    <span className="field__label" for="country">Country</span>
    <select className="field__input" id="country">
      <option value=""></option>
      <option value="India">India</option>
    </select>
  </label>
  <div className="fields fields--3">
    <label className="field">
      <span className="field__label" for="zipcode">Zip code</span>
      <input className="field__input" type="text" id="zipcode" />
    </label>
    <label className="field">
      <span className="field__label" for="city">City</span>
      <input className="field__input" type="text" id="city" />
    </label>
    <label className="field">
      <span className="field__label" for="state">State</span>
      <select className="field__input" id="state">
      <option value=""></option>
        <option value="Rajasthan">Rajasthan</option>
      </select>
    </label>
  </div>
  </div>
  <hr/>
       <button onClick={paymentPage}>Submit</button>
    </div>
  )
}

export default CheckoutPage
