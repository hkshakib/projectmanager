import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const card = (
  <>
    <CardContent>
      <Typography
        variant="h4"
        component="div"
        sx={{ display: "flex", justifyContent: "start" }}
      >
        First Project
      </Typography>
      <Typography
        color="text.secondary"
        sx={{ mb: 1.5, display: "flex", justifyContent: "start" }}
      >
        Posted By HkShakib
      </Typography>
      <Typography
        variant="body2"
        sx={{ display: "flex", justifyContent: "start" }}
      >
        17th July 2023, 12.31 AM
      </Typography>

      <Typography
        variant="body2"
        sx={{ display: "flex", justifyContent: "start" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
        autem.
      </Typography>
    </CardContent>
  </>
);

const ProjectDetails = () => {
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
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};

export default ProjectDetails;
