import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function MyAppBar() {
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">AppBar</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
