import React from "react";
import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default function MyAppBar() {
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">AppBar</Typography>
          <nav>
            <Link href="/">
              <a>Home</a>
            </Link>{" "}
            |{" "}
            <Link href="/about">
              <a>About</a>
            </Link>{" "}
            |{" "}
            <Link href="/initial-props">
              <a>Props</a>
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
