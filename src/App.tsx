import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";

export const App = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
  </Routes>
);
