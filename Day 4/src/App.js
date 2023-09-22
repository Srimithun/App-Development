import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";
import Panel from "./Components/DashBoard";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<SignupPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/admin/panel" element={<Panel/>}/>
    </Routes>
  );
}

export default App;
