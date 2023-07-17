import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Notifications from "./Notifications";

import ProjectList from "../Projects/ProjectList";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  marginTop: "40px",
  height: "85vh",
  display: "flex",
  flexDirection: "column",
}));

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <Item >
            <ProjectList />
          </Item>
        </Grid>

        <Grid item md={4} xs={12}>
          <Item sx={{ border: 1 }}>
            <Notifications />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
