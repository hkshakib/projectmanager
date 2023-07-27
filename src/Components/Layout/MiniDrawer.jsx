import * as React from "react";

import { useLocation } from "react-router-dom";

import { styled, useTheme } from "@mui/material/styles";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import MuiDrawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Box from "@mui/material/Box";

import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RssFeedOutlinedIcon from "@mui/icons-material/RssFeedOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import GridViewIcon from "@mui/icons-material/GridView";

import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";

import DrawerUi from "../Utilities/DrawerUi";

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

  const location = useLocation();

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
            active={location.pathname === "/"}
          />
          <DrawerUi
            menuName="Create Project"
            url="create"
            Icon={<AddCircleOutlineIcon />}
            open={open}
            active={location.pathname === "/create"}
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
          <DrawerUi
            menuName="To Do"
            url="todo"
            Icon={<PlaylistAddOutlinedIcon />}
            open={open}
          />
          <DrawerUi
            menuName="Calculator"
            url="calculator"
            Icon={<CalculateOutlinedIcon />}
            open={open}
          />

          <DrawerUi
            menuName="Tutorials"
            url="tutorials"
            Icon={<AssignmentTurnedInOutlinedIcon />}
            open={open}
          />
          <DrawerUi
            menuName="Blog"
            url="blog"
            Icon={<RssFeedOutlinedIcon />}
            open={open}
          />
          <DrawerUi
            menuName="Bookmarks"
            url="bookmarks"
            Icon={<BookOutlinedIcon />}
            open={open}
          />
        </List>

        <Divider />
        <List>
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
        <Divider />
      </Drawer>
    </Box>
  );
}
