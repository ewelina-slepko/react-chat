import React, { FC } from "react";
import { StyledSidebar } from "./Sidebar.styled";

export type SidebarProps = {
  isActive: boolean;
};

export const Sidebar: FC<SidebarProps> = ({ isActive }) => {
  return <StyledSidebar></StyledSidebar>;
};
