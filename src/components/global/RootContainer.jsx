"use client";

import { useEffect, useMemo, useState } from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { GlobalPortfolioContext } from "./GlobalPortfolioContext";
import { DarkModeToggle } from "./DarkModeToggle";
import { colors } from "../styles/colors";
import { allExperience } from "../experience/mockExperience";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ThemeProvider, createTheme } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  maxHeight: "100vh",
  maxWidth: "100vw",
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: colors[theme].background,
  color: colors[theme].textColorPrimary,
  overflow: "clip",
}));

const UtilityContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 16,
  position: "absolute",
  left: 32,
  bottom: 32,
});

const IconLinkWrapper = styled("a")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  opacity: 0.25,
  transition: "opacity 150ms ease-in",
  color: colors[theme].textColorPrimary,
  "&:hover": {
    opacity: 1,
  },
}));

const muiTheme = createTheme({
  typography: {
    fontFamily: "Helvetica, sans-serif",
  },
});

export default function RootContainer({ children }) {
  const [dark, setDark] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const [experience, setExperience] = useState([]);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  const toggleTheme = () => {
    setDark(!dark);
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    setExperience(allExperience);
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
      experience,
    }),
    [dark, screenWidth, experience]
  );

  return (
    <ThemeProvider theme={muiTheme}>
      <GlobalPortfolioContext.Provider value={contextValues}>
        <StyledBox theme={theme}>
          <UtilityContainer>
            <DarkModeToggle theme={theme} onClick={toggleTheme} />
            <IconLinkWrapper theme={theme} href="https://github.com/tacoplat/">
              <GitHubIcon />
            </IconLinkWrapper>
            <IconLinkWrapper
              theme={theme}
              href="https://linkedin.com/in/a3zhen"
            >
              <LinkedInIcon />
            </IconLinkWrapper>
          </UtilityContainer>
          {children}
        </StyledBox>
      </GlobalPortfolioContext.Provider>
    </ThemeProvider>
  );
}
