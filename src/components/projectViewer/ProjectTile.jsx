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
import { GlobalPortfolioContext } from "../global/GlobalPortfolioContext";

const StyledCard = styled(Card)(({ theme, isLast, isSmallScreen }) => ({
  width: 260,
  minWidth: 260,
  borderRadius: "1.2rem",
  boxShadow: "none",
  WebkitBoxShadow: "none",
  border: `1px solid ${colors[theme].borderHighContrast}`,
  backgroundColor: colors[theme].background,
  scrollSnapAlign: "start",
  marginRight: isLast && !isSmallScreen ? "68rem" : 0,
  marginBottom: isLast && isSmallScreen ? "68rem" : 0,
  flexShrink: 0,
}));

const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  color: colors[theme].textColorPrimary,
  cursor: "pointer",
  "&.MuiCardHeader-title": {
    fontSize: 14,
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  borderTop: `1px solid ${colors[theme].borderHighContrast}`,
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
  height: 42,
  overflow: "clip",
});

const ChipDisplay = ({ project }) => {
  const { theme } = useContext(GlobalPortfolioContext);
  return (
    <Box sx={{ marginTop: 0.6 }}>
      <MadeWithLabel variant="body2" theme={theme}>
        Made with
      </MadeWithLabel>
      <ChipContainer>
        {project.skills.map((skill) => (
          <StyledChip label={skill} theme={theme}></StyledChip>
        ))}
      </ChipContainer>
    </Box>
  );
};

const Title = styled(Typography)({
  fontSize: 20,
  fontWeight: 600,
});

const THUMBNAIL_FALLBACK = "/assets/no-thumbnail.png";

export default function ProjectTile({ project, isLast }) {
  const { isSmallScreen, theme } = useContext(GlobalPortfolioContext);

  return (
    <StyledCard theme={theme} isLast={isLast} isSmallScreen={isSmallScreen}>
      <StyledCardHeader
        theme={theme}
        title={<Title>{project.displayName}</Title>}
        subheader={<ChipDisplay project={project} />}
      />
      <StyledCardMedia theme={theme}>
        <Image
          src={project.img || THUMBNAIL_FALLBACK}
          width={260}
          height={260}
        />
      </StyledCardMedia>
    </StyledCard>
  );
}
