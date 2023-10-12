import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./HamburgerMenu.scss";
import Filter from "./Filter";

const HamburgerMenu = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const [isOpen, setIsOpen] = useState(!isMobile);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <div className="hamburger-menu">
      <h1>Search Result</h1>
      {isMobile ? (
        <Drawer
          anchor="left"
          open={isOpen}
          onClose={toggleDrawer(false)}
          classes={{
            paper: "drawer-paper",
          }}
        >
          <Filter />
        </Drawer>
      ) : (
        // Render as a div for desktop mode
        <div className="desktop-drawer">
          <Filter />
        </div>
      )}

      {/* Always display the MenuIcon for mobile mode */}
      {isMobile && (
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      )}
    </div>
  );
};

export default HamburgerMenu;
