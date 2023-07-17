import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
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
    </CardContent>
    <CardActions>
      <Button size="small">More</Button>
    </CardActions>
  </>
);

const ProjectSummery = () => {
  return (
    <Box
      sx={{
        minWidth: 275,
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        width: 700,
        mb: 1.5,
      }}
    >
      <Card variant="outlined">{card}</Card>
    </Box>
  )
}

export default ProjectSummery;