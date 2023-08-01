"use client";

import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { projects } from "./mockProjects";
import ProjectTile from "./ProjectTile";
import { useContext, useEffect, useRef } from "react";
import {
  GlobalPortfolioContext,
  ProjectViewerContext,
} from "../global/GlobalPortfolioContext";
import { scrollbarStyles } from "../styles/utils";

const Viewer = styled(Box)(({ isSmallScreen }) => {
  const defaultStyles = {
    display: "flex",
    flexDirection: isSmallScreen ? "column" : "row",
    alignItems: "center",
    columnGap: 64,
    rowGap: 180,
    width: "100%",
    height: isSmallScreen ? "65%" : "auto",
    overflowY: isSmallScreen ? "auto" : "hidden",
    overflowX: isSmallScreen ? "auto" : "scroll",
    scrollSnapType: "both mandatory",
    scrollBehavior: "smooth",
    padding: isSmallScreen ? 0 : "0 0 52px 0",
  };
  if (!isSmallScreen) return { ...defaultStyles, ...scrollbarStyles };
  return { ...defaultStyles };
});

const ErrorBox = styled(Box)({
  height: 400,
});

function useHorizontalScroll(deps) {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollBy(e.deltaY, 0);
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, deps);
  return elRef;
}

const filterQueryPredicate = (query, project) => {
  const queryLower = query.toLowerCase();
  return (
    project.displayName.toLowerCase().includes(queryLower) ||
    `${project.id}`.includes(queryLower) ||
    project.skills.join("").toLowerCase().includes(queryLower) ||
    project.tags.join("").toLowerCase().includes(queryLower)
  );
};

export default function ProjectViewer({ projectQuery }) {
  const { isSmallScreen } = useContext(GlobalPortfolioContext);
  const { setNumResults } = useContext(ProjectViewerContext);

  const viewerScroll = useHorizontalScroll([isSmallScreen]);
  const filteredProjects = projects.filter((project) =>
    filterQueryPredicate(projectQuery, project)
  );

  useEffect(() => {
    setNumResults(filteredProjects.length);
  }, [filteredProjects]);

  return (
    <Viewer
      isSmallScreen={isSmallScreen}
      ref={isSmallScreen ? null : viewerScroll}
    >
      {filteredProjects.map((project, index) => (
        <ProjectTile project={project} isLast={index === projects.length - 1} />
      ))}
      {!filteredProjects.length ? <ErrorBox>No projects found</ErrorBox> : null}
    </Viewer>
  );
}
