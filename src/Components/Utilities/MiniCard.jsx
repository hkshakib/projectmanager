import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Image from "../../Media/Images/Task1.jpg";
import { CardMedia } from "@mui/material";

export default function MiniCard({ Title, NumberOfTasks }) {
  return (
    <Card sx={{ display: "flex", marginBottom: 4 }} image={Image}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h6">
            {Title}
          </Typography>
          <Typography
            variant="subtitle3"
            color="text.secondary"
            component="div"
          >
            {NumberOfTasks}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 60, paddingRight: 1 }}
        image={Image}
        alt="Hey Image Didn't load"
      />
    </Card>
  );
}
