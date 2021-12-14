import React, { useState } from "react";
import GlobalStyle from "./globalStyles";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Navbar } from "./components/Navbar/Navbar";
import { Layout, LayoutWrapper } from "./App.styled";
import { Sidebar } from "./components/Sidebar/Sidebar";

const useSideMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const toggle = () => setIsActive(!isActive);

  return { isActive, toggle };
};

export const App = () => {
  const { isActive, toggle } = useSideMenu();

  return (
    <>
      <GlobalStyle />
      <Navbar isActive={isActive} onToggle={toggle} />
      <LayoutWrapper>
        <Sidebar isActive={isActive} />
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Layout>
      </LayoutWrapper>
    </>
  );
};
