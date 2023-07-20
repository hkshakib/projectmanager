import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Notifications from "./Notifications";
import ProjectList from "../Projects/ProjectList";
import { useDispatch } from "react-redux";
import { FetchProjects } from "../../Store/Reducers/ProjectReducer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  marginTop: "40px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchProjects());
  }, [dispatch]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <Item>
            <ProjectList />
          </Item>
        </Grid>

        <Grid item md={4} xs={12}>
          <Item>
            <Notifications />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
