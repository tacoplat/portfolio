import { Box } from "@mui/material";
import { colors } from "../styles/colors";
import styled from "@emotion/styled";

const Indicator = styled(Box)(({ theme }) => {
  return {
    width: 18,
    height: 18,
    "&:hover": {
      opacity: 1,
      backgroundColor: colors[theme].backgroundInverted,
    },
    opacity: 0.25,
    backgroundColor: colors[theme].background,
    border: `1px solid ${colors[theme].borderHighContrast}`,
    transition: "background-color 250ms ease-in",
    transition: "opacity 150ms ease-in",
    borderRadius: "100%",
  };
});

export const DarkModeToggle = ({ theme, onClick }) => {
  return <Indicator theme={theme} onClick={onClick}></Indicator>;
};
