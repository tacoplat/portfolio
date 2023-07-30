import { colors } from "./colors";

export const linkStyling = ({ theme }) => ({
  a: {
    color: colors[theme].textColorSecondary,
    textDecoration: "none",
    "& .MuiTypography-body1": {
      fontWeight: 600,
      "&:hover": {
        color: colors[theme].textColorPrimary,
        borderBottom: `1px solid ${colors[theme].borderHighContrast}`,
      },
    },
  },
});
