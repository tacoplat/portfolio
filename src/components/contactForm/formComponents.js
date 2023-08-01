"use client";

import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { noSelect } from "../styles/utils";
import { Box, Button } from "@mui/material";

export const StyledLabel = styled("label")(({ theme, isSmallScreen }) => ({
  fontSize: isSmallScreen ? 10 : 12,
  marginLeft: 16,
  fontWeight: 600,
  color: `1px solid ${colors[theme].textColorPrimary}`,
  ...noSelect,
}));

export const LabelFieldWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  rowGap: 6,
});

export const StyledButton = styled(Button)(({ theme }) => ({
  color: colors[theme].textColorPrimaryInverted,
  backgroundColor: colors[theme].backgroundInverted,
  borderRadius: "2rem",
  padding: "4px 16px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: colors[theme].backgroundInverted,
    color: colors[theme].textColorSecondaryInverted,
  },
}));

export const ActionWrapperBase = styled(Box)({
  display: "flex",
  columnGap: 16,
  rowGap: 8,
});
