"use client";

import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useContext } from "react";
import { GlobalPortfolioContext } from "../global/GlobalPortfolioContext";
import { colors } from "../styles/colors";
import { noSelect } from "../styles/utils";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";

const ProjectFilterWrapper = styled(Box)({
  display: "flex",
  gap: 8,
  alignItems: "center",
  svg: {
    fontSize: 20,
    cursor: "pointer",
  },
});

const LabelFieldWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  rowGap: 4,
});

const StyledLabel = styled("label")(({ theme, isSmallScreen }) => ({
  fontSize: isSmallScreen ? 10 : 12,
  marginLeft: 16,
  fontWeight: 600,
  color: `1px solid ${colors[theme].textColorPrimary}`,
  ...noSelect,
}));

const StyledTextField = styled("input")(({ theme }) => ({
  padding: "4px 16px",
  border: `1px solid ${colors[theme].borderHighContrast}`,
  borderRadius: "2rem",
}));

export default function ProjectFilter({ projectQuery, setProjectQuery }) {
  const { isSmallScreen, theme } = useContext(GlobalPortfolioContext);
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
    </LabelFieldWrapper>
  );
}
