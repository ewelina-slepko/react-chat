import React from "react";
import GlobalStyle from "./globalStyles";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Navbar } from "./components/Navbar";

export const App = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  </>
);
