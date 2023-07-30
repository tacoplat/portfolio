"use client";

import styled from "@emotion/styled";
import { Box, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { projects } from "./mockProjects";
import ProjectTile from "./ProjectTile";
import { useContext, useState } from "react";
import { GlobalPortfolioContext } from "../global/GlobalPortfolioContext";
import { colors } from "../styles/colors";

const ProjectViewerWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 16,
});

const Viewer = styled(Box)(({ isSmallScreen }) => ({
  display: "flex",
  flexDirection: isSmallScreen ? "column" : "row",
  alignItems: "center",
  gap: 60,
  width: isSmallScreen ? "100%" : "60%",
  overflowX: "clip",
  scrollSnapType: "y mandatory",
}));

const ViewerControlContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: 8,
  "& .MuiIconButton-root": {
    color: colors[theme].textColorSecondary,
  },
}));

export default function ProjectViewer() {
  const [x, setX] = useState(0);
  const { isSmallScreen, theme } = useContext(GlobalPortfolioContext);
  return (
    <ProjectViewerWrapper>
      <ViewerControlContainer theme={theme}>
        <IconButton size="small">
          <ChevronLeftIcon />
        </IconButton>
        <IconButton size="small">
          <ChevronRightIcon />
        </IconButton>
      </ViewerControlContainer>

      <Viewer isSmallScreen={isSmallScreen}>
        {projects.map((project) => (
          <ProjectTile project={project} />
        ))}
      </Viewer>
    </ProjectViewerWrapper>
  );
}
