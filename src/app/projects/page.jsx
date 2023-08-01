"use client";

import { useContext, useMemo, useState } from "react";
import {
  GlobalPortfolioContext,
  ProjectViewerContext,
} from "@/components/global/GlobalPortfolioContext";
import CurrentRouteBreadcrumbs from "@/components/routing/CurrentRouteBreadcrumbs";
import ProjectViewer from "@/components/projectViewer/ProjectViewer";
import { LandingText } from "@/components/styles/typography";
import { MainContent } from "@/components/global/common";
import ProjectFilter from "@/components/projectViewer/ProjectFilter";
import ProjectSummaryModal from "@/components/projectViewer/projectSummaryModal/ProjectSummaryModal";

export const PROJECT_SUMMARY_MODAL_STATES = {
  IDLE: "IDLE",
  ACTIVE: "ACTIVE",
};

export default function Projects() {
  const { isSmallScreen, theme } = useContext(GlobalPortfolioContext);
  const [projectQuery, setProjectQuery] = useState("");
  const [numResults, setNumResults] = useState(0);
  const [lastSelectedProject, setLastSelectedProject] = useState({});
  const [modalState, setModalState] = useState(
    PROJECT_SUMMARY_MODAL_STATES.IDLE
  );

  const contextValues = useMemo(
    () => ({
      lastSelectedProject,
      setLastSelectedProject,
      modalState,
      setModalState,
      numResults,
      setNumResults,
    }),
    [lastSelectedProject, modalState, numResults]
  );

  return (
    <ProjectViewerContext.Provider value={contextValues}>
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
      <ProjectSummaryModal project={lastSelectedProject} />
    </ProjectViewerContext.Provider>
  );
}
