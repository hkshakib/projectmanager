import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

import { LineChart } from "@mui/x-charts/LineChart";

import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import MiniDrawer from "../Layout/MiniDrawer";

const ProjectDetails = () => {
  const projects = useSelector((state) => state.projects.projects);
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  return (
    <Box
      sx={{
        minWidth: 275,
        display: "flex",
        // flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        m: 1.5,
        p: 1.5,
        gap: 4,
      }}
    >
      <MiniDrawer />
      <Card variant="outlined">
        <CardContent>
          <Typography
            variant="h4"
            component="div"
            sx={{ display: "flex", justifyContent: "start" }}
          >
            Dependencies
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              mb: 1.5,
              display: "flex",
              justifyContent: "start",
              flexDirection: "column",
            }}
          >
            <Typography>1) Install DevTools</Typography>
            <Typography>2) Install DevTools</Typography>
            <Typography>3) Install DevTools</Typography>
          </Typography>
        </CardContent>
      </Card>

      <Card variant="outlined">
        <CardContent>
          <Typography
            variant="h4"
            component="div"
            sx={{ display: "flex", justifyContent: "start" }}
          >
            {project?.project.title}
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ mb: 1.5, display: "flex", justifyContent: "start" }}
          >
            Posted By {project?.project.email}
          </Typography>
          <Typography
            variant="body2"
            sx={{ display: "flex", justifyContent: "start" }}
          >
            {project?.project.createTime}
          </Typography>

          <Typography
            variant="body2"
            sx={{ display: "flex", justifyContent: "start" }}
          >
            {project?.project.content}
          </Typography>
        </CardContent>
      </Card>

      <Card variant="outlined">
        <CardContent>
          <Typography
            variant="h4"
            component="div"
            sx={{ display: "flex", justifyContent: "start" }}
          >
            Dependencies
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              mb: 1.5,
              display: "flex",
              justifyContent: "start",
              flexDirection: "column",
            }}
          >
            <Typography>1) Install DevTools</Typography>
            <Typography>2) Install DevTools</Typography>
            <Typography>3) Install DevTools</Typography>
          </Typography>
        </CardContent>
      </Card>

      <Card variant="outlined">
        <CardContent>
          <Typography
            variant="h4"
            component="div"
            sx={{ display: "flex", justifyContent: "start" }}
          >
            Dependencies
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              mb: 1.5,
              display: "flex",
              justifyContent: "start",
              flexDirection: "column",
            }}
          >
            <Typography>1) Install DevTools</Typography>
            <Typography>2) Install DevTools</Typography>
            <Typography>3) Install DevTools</Typography>
          </Typography>
        </CardContent>
      </Card>
      
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        width={300}
        height={300}
        sx={{
          border: "1px solid black",
          backgroundColor: "white",
          flexGrow: 0,
        }}
      />
    </Box>
  );
};

export default ProjectDetails;
