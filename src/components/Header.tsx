import React from "react";
import AppBar from "@mui/material/AppBar";
import "../css/Header.css";
import { Box, Toolbar, Typography } from "@mui/material";

interface HeaderProps{
    title: string;
}

function Header(props: HeaderProps) {
  return (
    <>
      <header id="app-header">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar className="Header">
              <Typography variant="h5" sx={{ flexGrow: 1 }}>
                {props.title}
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        </header>
    </>
  );
}

export default Header;
