import React from "react";

import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Divider,
} from "@mui/material";

import Notifications from "../Dashboard/Notifications";
import ProjectList from "../Projects/ProjectList";

const Dashboard = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{ pt: 4 }}>
          <Grid item xs={12} md={5}>
            <Typography variant="h6" gutterBottom>
              Recents Projects
            </Typography>
            <ProjectList />
          </Grid>

          <Grid item xs={12} md={1}></Grid>
          <Divider orientation="vertical" variant="middle" flexItem />

          <Grid item xs={12} md={5}>
            <Paper sx={{ p: 2, boxShadow: 0 }}>
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

export default Dashboard;
