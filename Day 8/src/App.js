import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";
import Panel from "./Components/DashBoard";
import Landing from "./Components/Landing";
import TermsAndConditions from "./Components/Terms";
import AdminLoginPage from "./Components/AdminLogin";
import RestaurantMenu from "./Components/Menu";
import TermsConditionsPage from "./Components/TC";
import AddToCartPage from "./Components/Cart";
import Faq from "./Components/faq";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/register" element={<SignupPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/admin/panel" element={<Panel/>}/>
      <Route path="/terms" element={<TermsAndConditions/>}></Route>
      <Route path="/admin-login" element={<AdminLoginPage/>}/>
      <Route path="/menu" element={<RestaurantMenu/>}/>
      <Route path="/tc" element={<TermsConditionsPage/>}/>
      <Route path="/cart" element={<AddToCartPage/>}/>
      <Route path="/faq" element={<Faq/>}/>
      
      
      
    </Routes>
  );
}

export default App;
