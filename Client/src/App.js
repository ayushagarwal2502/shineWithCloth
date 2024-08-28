import "./App.css";
import Dashboard from "./Components/Dashboard";
import Cart from "./Components/Cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckoutPage from "./Components/CheckoutPage";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route  exact path="/" element={<SignUp />} />  
          <Route  path="/dashboard" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkoutpage" element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
