import { Button, Grid } from "@mui/material";
import React from "react";

const BigBtn = ({ operator }) => {
  if (operator === "AC") {
    return (
      <Grid
        md={6}
        sx={{
          boxShadow: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          fullWidth
          sx={{
            color: "white",
            fontSize: 24,
            bgcolor: "#94ADD7",
            "&:hover": {
              color: "black",
              bgcolor: "white",
            },
          }}
        >
          {operator}
        </Button>
      </Grid>
    );
  } else {
    return (
      <Grid
        md={6}
        sx={{
          boxShadow: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          fullWidth
          sx={{
            color: "white",
            fontSize: 50,
            bgcolor: "#94ADD7",
            "&:hover": {
              color: "black",
              bgcolor: "white",
            },
          }}
        >
          {operator}
        </Button>
      </Grid>
    );
  }
};

export default BigBtn;
