import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const projects = useSelector((state) => state.projects.projects);
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);
  console.log(project, id);
  return (
    <Box
      sx={{
        minWidth: 275,
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        mb: 1.5,
        pt: 1.5,
      }}
    >
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
    </Box>
  );
};

export default ProjectDetails;
