import React from "react";

import { Container, Typography, Box, Paper, Grid, Stack } from "@mui/material";

import Notifications from "../Dashboard/Notifications";
import ProjectList from "../Projects/ProjectList";
import TaskCard from "../Utilities/TaskCard";
import TaskUtility from "../Utilities/TaskUtility";
import MiniCard from "../Utilities/MiniCard";

const Dashboard = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{ pt: 4 }}>
          <Grid item xs={12} md={6}>
            <TaskUtility />
            <TaskCard />
            <Stack direction="row" gap={1}>
              <Grid xs={12} md={4}>
                <MiniCard Title="Upcoming Tasks" NumberOfTasks={40} />
              </Grid>
              <Grid xs={12} md={4}>
                <MiniCard Title="Ongoing Tasks" NumberOfTasks={22} />
              </Grid>
              <Grid xs={12} md={4}>
                <MiniCard Title="Completed Tasks" NumberOfTasks={77} />
              </Grid>
            </Stack>
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
