import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useDispatch } from "react-redux";
import { FetchProjects } from "../../Store/Reducers/ProjectReducer";
import { Container, Typography } from "@mui/material";
import Navbar from "./Navbar";
import ProjectList from "../Projects/ProjectList";
import Notifications from "../Dashboard/Notifications";

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchProjects());
  }, [dispatch]);

  return (
    <Box sx={{ height: "100vh", bgcolor: "#f0f0f0" }}>
      <Navbar />
      <Container maxWidth="xxl">
        <Grid container spacing={2} sx={{ pt: 4 }}>
          <Grid item xs={12} md={3}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                SideBar
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Recents Project
              </Typography>
              <ProjectList />
            </Paper>
          </Grid>

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
