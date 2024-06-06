import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { noSelect } from "../styles/utils";

export const MainContent = styled(Box)(({ isSmallScreen }) => ({
  height: isSmallScreen ? "90%" : 800,
  width: isSmallScreen ? "100%" : "60%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: isSmallScreen ? "center" : "start",
  gap: "3vh",
  "& .MuiTypography-root": {
    ...noSelect,
  },
}));

export const THUMBNAIL_FALLBACK = "/assets/no-thumbnail.png";
