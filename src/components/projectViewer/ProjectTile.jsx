"use client";

import styled from "@emotion/styled";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { colors } from "../styles/colors";
import { useContext } from "react";
import {
  GlobalPortfolioContext,
  ProjectViewerContext,
} from "../global/GlobalPortfolioContext";
import { THUMBNAIL_FALLBACK } from "../global/common";
import { PROJECT_SUMMARY_MODAL_STATES } from "@/app/projects/page";

const StyledCard = styled(Card)(({ theme, isLast, isSmallScreen }) => ({
  width: isSmallScreen ? "75%" : 260,
  height: isSmallScreen ? "80%" : "auto",
  minWidth: 260,
  borderRadius: "1.2rem",
  boxShadow: "none",
  WebkitBoxShadow: "none",
  border: `1px solid ${colors[theme].borderHighContrast}`,
  backgroundColor: colors[theme].background,
  scrollSnapAlign: "start",
  marginRight: isLast && !isSmallScreen ? "100%" : 0,
  marginBottom: isLast && isSmallScreen ? "100%" : 0,
  flexShrink: 0,
}));

const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  color: colors[theme].textColorPrimary,
  cursor: "pointer",
  "&.MuiCardHeader-title": {
    fontSize: 14,
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme, isSmallScreen }) => ({
  display: "flex",
  justifyContent: "center",
  borderTop: `1px solid ${colors[theme].borderHighContrast}`,
  borderBottom: isSmallScreen
    ? `1px solid ${colors[theme].borderHighContrast}`
    : "none",
}));

const MadeWithLabel = styled(Typography)(({ theme }) => ({
  fontSize: 10,
  color: colors[theme].textColorSecondary,
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  padding: 0,
  fontSize: 12,
  height: 18,
  color: colors[theme].textColorSecondary,
  "&:hover": {
    color: colors[theme].textColorPrimary,
    cursor: "auto",
  },
}));

const ChipContainer = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  columnGap: 8,
  rowGap: 6,
  marginTop: 4,
  maxWidth: "100%",
  overflow: "clip",
});

export const ChipDisplay = ({ list, type }) => {
  const { theme } = useContext(GlobalPortfolioContext);
  return (
    <Box>
      {type === "skills" ? (
        <MadeWithLabel variant="body2" theme={theme}>
          Made with
        </MadeWithLabel>
      ) : null}
      <ChipContainer>
        {list.map((item) => (
          <StyledChip label={item} theme={theme}></StyledChip>
        ))}
      </ChipContainer>
    </Box>
  );
};

const Title = styled(Typography)({
  fontSize: 20,
  fontWeight: 600,
});

export default function ProjectTile({ project, isLast }) {
  const { isSmallScreen, theme } = useContext(GlobalPortfolioContext);
  const { setLastSelectedProject, setModalState } =
    useContext(ProjectViewerContext);

  return (
    <StyledCard theme={theme} isLast={isLast} isSmallScreen={isSmallScreen}>
      <StyledCardHeader
        theme={theme}
        title={<Title>{project.displayName}</Title>}
        subheader={<ChipDisplay type="tags" list={project.tags} />}
        onClick={() => {
          setLastSelectedProject(project);
          setModalState(PROJECT_SUMMARY_MODAL_STATES.ACTIVE);
        }}
      />
      <StyledCardMedia theme={theme} isSmallScreen={isSmallScreen}>
        <Image
          src={project.img || THUMBNAIL_FALLBACK}
          width={260}
          height={260}
        />
      </StyledCardMedia>
    </StyledCard>
  );
}
