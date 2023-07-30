"use client";

import { useContext } from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { noSelect } from "@/components/styles/utils";
import { GlobalPortfolioContext } from "@/components/global/GlobalPortfolioContext";
import CurrentRouteBreadcrumbs from "@/components/routing/CurrentRouteBreadcrumbs";
import ProjectViewer from "@/components/projectViewer/ProjectViewer";

const MainContent = styled(Box)(({ isSmallScreen }) => ({
  height: isSmallScreen ? 600 : 800,
  width: isSmallScreen ? "100%" : "60%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: isSmallScreen ? "center" : "start",
  gap: isSmallScreen ? 46 : 36,
  "& .MuiTypography-root": {
    ...noSelect,
  },
}));

export default function Projects() {
  const { isSmallScreen, theme } = useContext(GlobalPortfolioContext);

  return (
    <MainContent isSmallScreen={isSmallScreen}>
      <CurrentRouteBreadcrumbs theme={theme} />
      <ProjectViewer></ProjectViewer>
    </MainContent>
  );
}
