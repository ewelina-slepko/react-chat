import React, { useState } from "react";
import GlobalStyle from "./globalStyles";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/pages/Dashboard";
import { Login } from "./components/pages/authentication/Login";
import { Register } from "./components/pages/authentication/Register";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};
