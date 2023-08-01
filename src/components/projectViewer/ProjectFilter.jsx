"use client";

import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useContext } from "react";
import {
  GlobalPortfolioContext,
  ProjectViewerContext,
} from "../global/GlobalPortfolioContext";
import { colors } from "../styles/colors";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { StyledLabel } from "../contactForm/formComponents";
import { formatProjectsQuantity } from "../styles/utils";

const LabelFieldWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  rowGap: 6,
  maxWidth: "80%",
});

const ProjectFilterWrapper = styled(Box)({
  display: "flex",
  gap: 8,
  alignItems: "center",
  svg: {
    fontSize: 20,
    cursor: "pointer",
  },
});

const StyledTextField = styled("input")(({ theme }) => ({
  padding: "6px 12px",
  width: 360,
  border: `1px solid ${colors[theme].borderHighContrast}`,
  borderRadius: "2rem",
}));

export default function ProjectFilter({ projectQuery, setProjectQuery }) {
  const { isSmallScreen, theme } = useContext(GlobalPortfolioContext);
  const { numResults } = useContext(ProjectViewerContext);

  return (
    <LabelFieldWrapper>
      <StyledLabel isSmallScreen={isSmallScreen} theme={theme}>
        Filter projects
      </StyledLabel>
      <ProjectFilterWrapper>
        <StyledTextField
          theme={theme}
          value={projectQuery}
          onChange={(e) => {
            setProjectQuery(e.target.value);
          }}
        />
        <HighlightOffOutlinedIcon
          onClick={(e) => {
            setProjectQuery("");
          }}
        />
      </ProjectFilterWrapper>
      <Box>
        <StyledLabel isSmallScreen={isSmallScreen} theme={theme}>
          {formatProjectsQuantity(numResults)}
        </StyledLabel>
      </Box>
    </LabelFieldWrapper>
  );
}
