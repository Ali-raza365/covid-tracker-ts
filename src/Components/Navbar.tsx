import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
 

function NavBar () {
  return (
    <>
      <CssBaseline />
      <AppBar color="primary" style={{backgroundColor:'#ba135d'}}>
        <Toolbar>
          <Typography variant="h6">Covid19-Tracker with Typescript</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
