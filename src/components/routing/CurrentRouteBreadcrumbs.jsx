import { Breadcrumbs, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import RoutingLink from "./RoutingLink";
import { capitalize } from "../styles/utils";
import styled from "@emotion/styled";
import { linkStyling } from "../styles/routing";
import { colors } from "../styles/colors";

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  "& .current": {
    fontWeight: 600,
    color: colors[theme].textColorPrimary,
  },
  ...linkStyling({ theme }),
}));

export default function CurrentRouteBreadcrumbs({ theme }) {
  const pathname = usePathname();

  const generateBreadcrumbs = () => {
    const crumbs = pathname
      .split("/")
      .splice(1)
      .map((crumb) => ({ href: crumb, displayName: capitalize(crumb) }));

    return [{ href: "/", displayName: "Home" }, ...crumbs];
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <StyledBreadcrumbs
      aria-label="breadcrumb"
      separator={
        <Typography sx={{ color: colors[theme].textColorSecondary }}>
          {">"}
        </Typography>
      }
      theme={theme}
    >
      {breadcrumbs.map((crumb, index) => (
        <RoutingLink
          key={index}
          link={crumb}
          isLast={index === breadcrumbs.length - 1}
        ></RoutingLink>
      ))}
    </StyledBreadcrumbs>
  );
}
