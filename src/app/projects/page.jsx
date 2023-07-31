"use client";

import { useContext, useState } from "react";
import { GlobalPortfolioContext } from "@/components/global/GlobalPortfolioContext";
import CurrentRouteBreadcrumbs from "@/components/routing/CurrentRouteBreadcrumbs";
import ProjectViewer from "@/components/projectViewer/ProjectViewer";
import { LandingText } from "@/components/styles/typography";
import { MainContent } from "@/components/styles/common";
import ProjectFilter from "@/components/projectViewer/ProjectFilter";

export default function Projects() {
  const { isSmallScreen, theme } = useContext(GlobalPortfolioContext);
  const [projectQuery, setProjectQuery] = useState("");

  return (
    <MainContent isSmallScreen={isSmallScreen}>
      <CurrentRouteBreadcrumbs theme={theme} />
      <LandingText variant="h5" isSmallScreen={isSmallScreen}>
        This is what I've been working on.
      </LandingText>
      <ProjectFilter
        projectQuery={projectQuery}
        setProjectQuery={setProjectQuery}
      />
      <ProjectViewer projectQuery={projectQuery} />
    </MainContent>
  );
}
