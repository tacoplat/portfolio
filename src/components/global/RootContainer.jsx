"use client";

import { useEffect, useMemo, useState } from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { GlobalPortfolioContext } from "./GlobalPortfolioContext";
import { DarkModeToggle } from "./DarkModeToggle";
import { colors } from "../styles/colors";

export const StyledBox = styled(Box)(({ theme }) => ({
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: colors[theme].background,
  color: colors[theme].textColorPrimary,
}));

export default function RootContainer({ children }) {
  const [dark, setDark] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  const toggleTheme = () => {
    setDark(!dark);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallScreen = screenWidth <= 768;
  const theme = dark ? "darkMode" : "lightMode";

  const contextValues = useMemo(
    () => ({
      isSmallScreen,
      theme,
    }),
    [dark, screenWidth]
  );

  return (
    <GlobalPortfolioContext.Provider value={contextValues}>
      <StyledBox theme={theme}>
        <DarkModeToggle theme={theme} onClick={toggleTheme} />
        {children}
      </StyledBox>
    </GlobalPortfolioContext.Provider>
  );
}
