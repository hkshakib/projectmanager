import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import GridViewIcon from "@mui/icons-material/GridView";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import DrawerUi from "../Utilities/DrawerUi";
import { Typography } from "@mui/material";

const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(1, 2),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const user = useSelector((state) => state.auth.value);

  const auth = getAuth();

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawer}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <DrawerUi
            menuName="Dashboard"
            url="/"
            Icon={<GridViewIcon />}
            open={open}
          />
          <DrawerUi
            menuName="Create Project"
            url="create"
            Icon={<AddCircleOutlineIcon />}
            open={open}
          />
          <DrawerUi
            menuName="Profile"
            url="profile"
            Icon={<PersonOutlineIcon />}
            open={open}
          />
          <DrawerUi
            menuName="Progress"
            url="progress"
            Icon={<DonutSmallOutlinedIcon />}
            open={open}
          />
          <DrawerUi
            menuName="Your Project"
            url="own-project"
            Icon={<AccountTreeOutlinedIcon />}
            open={open}
          />
        </List>
        <Divider />
        <List>
          {open && (
            <>
              <Typography sx={{ textAlign: "center", fontSize: 14, mb: 1 }}>
                Reports and Update
              </Typography>
              <Divider />
            </>
          )}
          <DrawerUi
            menuName="This Month"
            url=""
            Icon={<SummarizeOutlinedIcon />}
            open={open}
          />
          <DrawerUi
            menuName="Last 3 Months"
            url=""
            Icon={<SummarizeOutlinedIcon />}
            open={open}
          />

          <DrawerUi
            menuName="Last 6 Months"
            url=""
            Icon={<SummarizeOutlinedIcon />}
            open={open}
          />
          <DrawerUi
            menuName="Last 12 Months"
            url=""
            Icon={<SummarizeOutlinedIcon />}
            open={open}
          />
          <DrawerUi
            menuName="Last 24 Months"
            url=""
            Icon={<SummarizeOutlinedIcon />}
            open={open}
          />
        </List>
        <Divider />
        <List>
          {user &&
            ["Logout"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  onClick={() => {
                    signOut(auth)
                      .then(() => {
                        console.log("user signed out");
                      })
                      .catch((error) => {
                        console.log("error", error);
                      });
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <LogoutOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
        </List>
      </Drawer>
    </Box>
  );
}
