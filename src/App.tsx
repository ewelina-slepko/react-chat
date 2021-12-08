import React from "react";
import GlobalStyle from "./globalStyles";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Navbar } from "./components/Navbar";
import {Layout, LayoutWrapper} from "./App.styled";
import { Sidebar } from "./components/Sidebar/Sidebar";

export const App = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <LayoutWrapper>
      <Sidebar />
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Layout>
    </LayoutWrapper>
  </>
);
