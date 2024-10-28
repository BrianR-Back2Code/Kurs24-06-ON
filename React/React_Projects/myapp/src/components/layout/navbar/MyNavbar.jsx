import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { mainNavbarItems } from "./const/navbaritems";
import { Typography } from "@mui/material";
import { styleNavbar } from "./StyleNavbar";

const MyNavbar = () => {
  return (
    <Drawer sx={styleNavbar.drawer} variant="permanent" anchor="left">
      <Toolbar>
        <Typography variant="h5" color="primary" sx={{ mt: 2 }}>
          ICantCodeCrack
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {mainNavbarItems.map((text, index) => (
          <ListItem key={text.id} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={styleNavbar.icons}>{text.icon}</ListItemIcon>
              <ListItemText sx={styleNavbar.text} primary={text.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default MyNavbar;
