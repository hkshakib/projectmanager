import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

const DrawerUi = ({ menuName, url, Icon, open, active }) => {
  return (
    <ListItem disablePadding sx={{ display: "block" }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
          background: active ? "#A6E1ED" : "",
          color: "black",
          "&:hover": {
            background: active ? "" : "#A6E1ED",
            color: "black",
            borderTop: "1px solid white",
          },
        }}
        href={`${url}`}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
            color: "black",
            "&:hover": {
              color: "black",
            },
          }}
        >
          {Icon}
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{ fontSize: "14px" }}
          primary={menuName}
          sx={{ opacity: open ? 1 : 0 }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default DrawerUi;
