"use client";

import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const LandingText = styled(Typography)(({ isSmallScreen }) => ({
  fontWeight: 600,
  fontSize: 28,
  display: "flex",
  justifyContent: isSmallScreen ? "center" : "start",
  width: isSmallScreen ? "80%" : "auto",
}));
