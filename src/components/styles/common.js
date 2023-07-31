import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { noSelect } from "./utils";

export const MainContent = styled(Box)(({ isSmallScreen }) => ({
  height: isSmallScreen ? 640 : 800,
  width: isSmallScreen ? "100%" : "60%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: isSmallScreen ? "center" : "start",
  gap: "4%",
  "& .MuiTypography-root": {
    ...noSelect,
  },
}));
