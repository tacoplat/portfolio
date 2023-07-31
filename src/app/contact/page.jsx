"use client";

import { useContext } from "react";
import { GlobalPortfolioContext } from "@/components/global/GlobalPortfolioContext";
import CurrentRouteBreadcrumbs from "@/components/routing/CurrentRouteBreadcrumbs";
import { LandingText } from "@/components/styles/typography";
import { MainContent } from "@/components/styles/common";

export default function About() {
  const { isSmallScreen, theme } = useContext(GlobalPortfolioContext);

  return (
    <MainContent isSmallScreen={isSmallScreen}>
      <CurrentRouteBreadcrumbs theme={theme} />
      <LandingText variant="h5" isSmallScreen={isSmallScreen}>
        Questions or concerns? Let me know.
      </LandingText>
    </MainContent>
  );
}
