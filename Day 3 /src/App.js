import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<SignupPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
  );
}

export default App;
