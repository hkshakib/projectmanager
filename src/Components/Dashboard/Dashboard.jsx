import React from "react";

import { Container, Typography, Box, Paper, Grid } from "@mui/material";

import Notifications from "../Dashboard/Notifications";
import ProjectList from "../Projects/ProjectList";
import TaskCard from "../Utilities/TaskCard";
import TaskUtility from "../Utilities/TaskUtility";

const Dashboard = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{ pt: 4 }}>
          <Grid item xs={12} md={6}>
            <TaskUtility />
            <TaskCard />
            <Typography variant="h6" gutterBottom>
              Recents Tasks
            </Typography>
            <ProjectList />
          </Grid>

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
