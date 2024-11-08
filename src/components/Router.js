import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import App from "./App";

const AppRouter = ({isLoggedIn})=>{
  return(
    <Routes>
      { isLoggedIn ? 
      <Route path="/" element={<Home/>}/>
      : 
      <Route path="/" element={<Auth/>}/>
      }
    </Routes>
  )

};
export default AppRouter;