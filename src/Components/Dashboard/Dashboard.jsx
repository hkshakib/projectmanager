import React from "react";

import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Stack,
  Button,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import Notifications from "../Dashboard/Notifications";
import ProjectList from "../Projects/ProjectList";
import { useSelector } from "react-redux";
import TaskCard from "../Utilities/TaskCard";

const Dashboard = () => {
  const lastName = useSelector((state) => state.auth.user.lastName);
  const UserName = lastName;
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{ pt: 4 }}>
          <Grid item xs={12} md={6}>
            <Stack direction="row" spacing={30}>
              <Typography variant="h5" gutterBottom>
                Good Morning,{" "}
                <span
                  style={{
                    color: "blue",
                    font: "mono",
                    textTransform: "uppercase",
                  }}
                >
                  {UserName}!
                </span>
              </Typography>
              <Button
                startIcon={<AddCircleOutlineIcon />}
                variant="outlined"
                sx={{
                  background: "blue",
                  color: "#fff",
                  width: "200px",
                  height: "30px",
                  "&:hover": {
                    color: "black",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                  }}
                >
                  Add a new task
                </Typography>
              </Button>
            </Stack>
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
