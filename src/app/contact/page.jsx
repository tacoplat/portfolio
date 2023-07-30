"use client";

import { useContext } from "react";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { noSelect } from "@/components/styles/utils";
import { GlobalPortfolioContext } from "@/components/global/GlobalPortfolioContext";
import CurrentRouteBreadcrumbs from "@/components/routing/CurrentRouteBreadcrumbs";

const MainContent = styled(Box)(({ isSmallScreen }) => ({
  height: isSmallScreen ? 600 : 800,
  width: isSmallScreen ? "100%" : "60%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: isSmallScreen ? "center" : "start",
  gap: isSmallScreen ? "12%" : 52,
  "& .MuiTypography-root": {
    ...noSelect,
  },
}));

const LandingText = styled(Typography)({
  fontWeight: 600,
  fontSize: 28,
});

export default function About() {
  const { isSmallScreen, theme } = useContext(GlobalPortfolioContext);

  return (
    <MainContent isSmallScreen={isSmallScreen}>
      <CurrentRouteBreadcrumbs theme={theme} />
      <LandingText variant="h5">
        Any questions or concerns? Let me know.
      </LandingText>
    </MainContent>
  );
}
