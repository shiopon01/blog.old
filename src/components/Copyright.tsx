import React from "react";
import { Typography, Link } from "@material-ui/core";

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © 2019 "}
      <Link color="inherit" href="https://twitter.com/shiopon01">
        shiopon01
      </Link>
    </Typography>
  );
}
