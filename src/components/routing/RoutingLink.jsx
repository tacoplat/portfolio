import { Typography } from "@mui/material";
import Link from "next/link";

export default function RoutingLink({ link, isLast }) {
  return isLast ? (
    <Typography variant="body1" className="current">
      {link.displayName}
    </Typography>
  ) : (
    <Link href={link.href}>
      <Typography variant="body1">{link.displayName}</Typography>
    </Link>
  );
}
