"use client";

import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { projects } from "./mockProjects";
import ProjectTile from "./ProjectTile";
import { useContext, useEffect, useRef } from "react";
import { GlobalPortfolioContext } from "../global/GlobalPortfolioContext";

const scrollbarStyles = {
  "&::-webkit-scrollbar": {
    height: "0.8rem",
    width: "0.8rem",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(0,0,0,.1)",
    outline: "none",
    borderRadius: "1rem",
  },
};

const Viewer = styled(Box)(({ isSmallScreen }) => {
  const defaultStyles = {
    display: "flex",
    flexDirection: isSmallScreen ? "column" : "row",
    alignItems: "center",
    columnGap: 64,
    rowGap: 180,
    width: "100%",
    height: isSmallScreen ? "100%" : "auto",
    overflowY: isSmallScreen ? "auto" : "hidden",
    overflowX: "auto",
    scrollSnapType: "both mandatory",
    scrollBehavior: "smooth",
    padding: isSmallScreen ? 0 : "0 0 32px 0",
  };
  if (!isSmallScreen) return { ...defaultStyles, ...scrollbarStyles };
  return { ...defaultStyles };
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

export default function ProjectViewer() {
  const { isSmallScreen, theme } = useContext(GlobalPortfolioContext);

  const viewerScroll = useHorizontalScroll([isSmallScreen]);

  return (
    <Viewer
      isSmallScreen={isSmallScreen}
      ref={isSmallScreen ? null : viewerScroll}
    >
      {projects.map((project, index) => (
        <ProjectTile project={project} isLast={index === projects.length - 1} />
      ))}
    </Viewer>
  );
}
