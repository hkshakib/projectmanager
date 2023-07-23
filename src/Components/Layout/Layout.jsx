import React, { useEffect } from "react";

import { FetchProjects } from "../../Store/Reducers/ProjectReducer";
import { useDispatch } from "react-redux";

import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Divider,
} from "@mui/material";

import ProjectList from "../Projects/ProjectList";
import Notifications from "../Dashboard/Notifications";
import MiniDrawer from "./MiniDrawer";

const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchProjects());
  }, [dispatch]);

  return (
    <Box>
      {/* <Navbar /> */}
      <Container maxWidth="xxl">
        <Grid container spacing={2} sx={{ pt: 4 }}>
          <MiniDrawer />
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Recents Projects
            </Typography>
            <ProjectList />
          </Grid>
          <Grid item xs={12} md={2}></Grid>
          <Divider orientation="vertical" variant="middle" flexItem />

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Notifications
              </Typography>
              <Notifications />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Layout;
