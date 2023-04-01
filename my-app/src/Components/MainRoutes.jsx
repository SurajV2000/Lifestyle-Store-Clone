
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { Men } from "../pages/Men";
import { Women } from "../pages/Women";
import Singlecardwomen from "./Singlecard";
import Singlecardmen from "./Singlecardmen";
import Checkout from "../pages/Checkout";
import Payment from "../pages/Payment";
import { Cart } from "../pages/Cart";
import Login from "../pages/Login";

function MainRoutes() {

  return (
    <Routes>

        <Route path="/" element={<HomePage/>}/>
   <Route path="/men" element={<Men/>}/>

      <Route path="/" element={<HomePage />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/men/:id" element={<Singlecardmen />} />
      <Route path="/women/:id" element={<Singlecardwomen/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<Login/>}/>


    </Routes>
  );
}

export default MainRoutes;
