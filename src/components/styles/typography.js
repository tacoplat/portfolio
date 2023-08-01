"use client";

import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const LandingText = styled(Typography)(({ isSmallScreen }) => ({
  fontWeight: 600,
  fontSize: isSmallScreen ? 20 : 28,
  display: "flex",
  justifyContent: isSmallScreen ? "center" : "start",
  padding: isSmallScreen ? "0px 16px" : 0,
  width: isSmallScreen ? "100%" : "auto",
  maxWidth: isSmallScreen ? "100%" : "auto",
  padding: isSmallScreen ? "0 2rem" : 0,
}));
