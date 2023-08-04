import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardMedia } from "@mui/material";

import Image from "../../Media/Images/Task1.jpg";

export default function TaskCard() {
  return (
    <Card sx={{ display: "flex", marginBottom: 4 }} image={Image}>
      <Box sx={{ display: "flex", flexGrow: 1, flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h4">
            Today's Tasks
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Check your daily task's and Schedule
          </Typography>
        </CardContent>
        <Button
          sx={{
            margin: 1,
            backgroundColor: "blue",
            width: 250,
            color: "white",
            "&:hover": {
              color: "black",
              border: "1px solid black",
            },
          }}
        >
          See Today's Schedule
        </Button>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151, paddingRight: 1 }}
        image={Image}
        alt="Hey Image Didn't load"
      />
    </Card>
  );
}
