import React, { useState } from "react";
import { Navbar } from "../ui/Navbar/Navbar";
import { Layout, LayoutWrapper } from "../../App.styled";
import { Sidebar } from "../ui/Sidebar/Sidebar";

const useSideMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const toggle = () => setIsActive(!isActive);

  return { isActive, toggle };
};

export const Dashboard = () => {
  const { isActive, toggle } = useSideMenu();
  return (
    <>
      <Navbar isActive={isActive} onToggle={toggle} />
      <LayoutWrapper>
        <Sidebar isActive={isActive} />
        <Layout>Hello!</Layout>
      </LayoutWrapper>
    </>
  );
};
