"use client";

import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { GlobalPortfolioContext } from "@/components/global/GlobalPortfolioContext";
import { colors } from "@/components/styles/colors";
import { noSelect } from "@/components/styles/utils";
import RoutingLink from "@/components/routing/RoutingLink";
import { homePageLinks } from "./links";
import { linkStyling } from "@/components/styles/routing";

const MainContent = styled(Box)(({ isSmallScreen }) => ({
  height: 800,
  width: "60%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: isSmallScreen ? "center" : "start",
  gap: isSmallScreen ? 46 : 36,
  "& .MuiTypography-root": {
    ...noSelect,
  },
}));

const ImageBox = styled(Box)(({ isSmallScreen }) =>
  isSmallScreen
    ? {
        display: "none",
      }
    : {
        width: 200,
        height: 250,
        border: "1px solid black",
      }
);

const Links = styled(Box)(({ isSmallScreen, theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: isSmallScreen ? "column" : "row",
  justifyContent: "start",
  alignItems: "center",
  gap: isSmallScreen ? 12 : 36,
  ...linkStyling({ theme }),
}));

export default function Home() {
  const { isSmallScreen, theme } = useContext(GlobalPortfolioContext);

  return (
    <MainContent isSmallScreen={isSmallScreen}>
      <ImageBox isSmallScreen={isSmallScreen}>Image Placeholder</ImageBox>
      <Typography variant="h1" align={isSmallScreen ? "center" : "left"}>
        Andy Zhen
      </Typography>
      <Links isSmallScreen={isSmallScreen} theme={theme}>
        {homePageLinks.map((link) => (
          <RoutingLink link={link} onClick={null} />
        ))}
      </Links>
    </MainContent>
  );
}
