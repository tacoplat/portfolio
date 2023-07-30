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

const StyledCard = styled(Card)(({ theme }) => ({
  width: 260,
  minWidth: 260,
  borderRadius: "1.2rem",
  boxShadow: "none",
  WebkitBoxShadow: "none",
  border: `1px solid ${colors[theme].borderHighContrast}`,
  backgroundColor: colors[theme].background,
  scrollSnapAlign: "start",
}));

const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  color: colors[theme].textColorPrimary,
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  borderTop: `1px solid ${colors[theme].borderHighContrast}`,
  borderBottom: `1px solid ${colors[theme].borderHighContrast}`,
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: 14,
  "&.MuiCardContent-root:last-child": {
    padding: 14,
  },
  color: colors[theme].textColorPrimary,
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  padding: 0,
  fontSize: 12,
  height: "auto",
  color: colors[theme].textColorSecondary,
  "&:hover": {
    color: colors[theme].textColorPrimary,
  },
}));

const ChipContainer = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  columnGap: 8,
  rowGap: 6,
  marginTop: 8,
  maxWidth: "100%",
  maxHeight: 48,
  overflow: "clip",
});

const ChipDisplay = ({ project }) => {
  const { theme } = useContext(GlobalPortfolioContext);
  return (
    <ChipContainer>
      {project.skills.map((skill) => (
        <StyledChip label={skill} theme={theme}></StyledChip>
      ))}
    </ChipContainer>
  );
};

const Description = styled(Typography)({
  padding: 0,
  fontSize: 14,
});

export default function ProjectTile({ project }) {
  const { theme } = useContext(GlobalPortfolioContext);

  return (
    <StyledCard theme={theme}>
      <StyledCardHeader
        theme={theme}
        title={project.displayName}
        subheader={<ChipDisplay project={project} />}
      />
      <StyledCardMedia theme={theme}>
        <Image src={project.img} width={260} height={260} />
      </StyledCardMedia>
      <StyledCardContent theme={theme}>
        <Description variant="body1">{project.description}</Description>
      </StyledCardContent>
    </StyledCard>
  );
}
