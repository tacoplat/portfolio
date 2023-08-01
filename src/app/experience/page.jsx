"use client";

import { useContext, useState } from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { scrollbarStyles } from "@/components/styles/utils";
import { GlobalPortfolioContext } from "@/components/global/GlobalPortfolioContext";
import CurrentRouteBreadcrumbs from "@/components/routing/CurrentRouteBreadcrumbs";
import ExperienceContainer from "@/components/experience/ExperienceContainer";
import { LandingText } from "@/components/styles/typography";
import { MainContent } from "@/components/global/common";
import { colors } from "@/components/styles/colors";
import DownloadIcon from "@mui/icons-material/Download";
import RedoIcon from "@mui/icons-material/Redo";
import {
  ActionWrapperBase,
  StyledButton,
} from "@/components/contactForm/formComponents";

const ExperienceWrapper = styled(Box)(({ isSmallScreen }) => {
  const defaultStyles = {
    display: "flex",
    flexDirection: "column",
    gap: 24,
    width: "100%",
    maxHeight: "60%",
    overflowX: "hidden",
    overflowY: "auto",
    scrollBehavior: "smooth",
  };

  if (!isSmallScreen) return { ...defaultStyles, ...scrollbarStyles };
  return { ...defaultStyles };
});

const ActionWrapper = styled(ActionWrapperBase)({
  justifyContent: "center",
  flexFlow: "row wrap",
});

const JumpToWrapper = styled(Box)(({ theme, isSmallScreen }) => ({
  display: "flex",
  gap: 0,
  border: isSmallScreen
    ? "none"
    : `1px solid ${colors[theme].borderHighContrast}`,
  borderRadius: "2rem",
}));

const JumpToActions = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 16,
  padding: "4px 16px",
  a: {
    color: colors[theme].textColorPrimary,
    textDecoration: "none",
  },
  "@keyframes slideInFromLeft": {
    "0%": {
      transform: "translateX(-100%)",
      display: "none",
    },
    "60%": {
      transform: "translateX(-30%)",
      display: "none",
      opacity: 0,
    },
    "100%": {
      transform: "scaleX(1)",
      transform: "translateX(0%)",
      opacity: 1,
    },
  },
  animation: "0.3s ease-in 0s 1 slideInFromLeft",
  animationDirection: "normal, reverse",
}));

const JumpToActionsSmallScreens = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexWrap: "row",
  alignItems: "center",
  gap: 2,
  padding: 24,
  a: {
    color: colors[theme].textColorPrimary,
    textDecoration: "none",
  },
  width: "100%",
  position: "fixed",
  transform: "translateY(2rem)",
  zIndex: 5,
  backgroundColor: colors[theme].background,
  borderBottom: `1px solid ${colors[theme].borderHighContrast}`,
}));

export default function Experience() {
  const { isSmallScreen, theme, educationItems, workItems, volunteerItems } =
    useContext(GlobalPortfolioContext);
  const [jumpToActive, setJumpToActive] = useState(false);

  return (
    <MainContent isSmallScreen={isSmallScreen}>
      <CurrentRouteBreadcrumbs theme={theme} />
      <LandingText isSmallScreen={isSmallScreen} variant="h5">
        Previously (or currently) at...
      </LandingText>
      <Box>
        <ActionWrapper>
          <StyledButton
            theme={theme}
            component="a"
            href="/azhen-resume.pdf"
            endIcon={<DownloadIcon />}
          >
            Download resumé
          </StyledButton>
          <JumpToWrapper theme={theme} isSmallScreen={isSmallScreen}>
            <StyledButton
              theme={theme}
              endIcon={<RedoIcon />}
              onClick={() => {
                setJumpToActive(!jumpToActive);
              }}
            >
              Jump to
            </StyledButton>
            {jumpToActive && !isSmallScreen ? (
              <JumpToActions theme={theme}>
                <a href="#education">Education</a>
                <a href="#work">Work</a>
                <a href="#volunteering">Volunteering</a>
              </JumpToActions>
            ) : null}
          </JumpToWrapper>
          {jumpToActive && isSmallScreen ? (
            <JumpToActionsSmallScreens theme={theme}>
              <a href="#education">Education</a>
              <a href="#work">Work</a>
              <a href="#volunteering">Volunteering</a>
            </JumpToActionsSmallScreens>
          ) : null}
        </ActionWrapper>
      </Box>
      <ExperienceWrapper>
        <ExperienceContainer heading={"Education"} items={educationItems} />
        <ExperienceContainer heading={"Work"} items={workItems} />
        <ExperienceContainer
          heading={"Volunteering & Extracurricular"}
          items={volunteerItems}
          isLast
        />
      </ExperienceWrapper>
    </MainContent>
  );
}
