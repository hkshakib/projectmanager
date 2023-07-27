import { Button, Grid } from "@mui/material";
import React from "react";

const OperatorBtn = ({ operator }) => {
  return (
    <Grid
      md={3}
      sx={{
        boxShadow: 0,
        display: "flex",
        justifyContent: "center",
        bgcolor: "white",
      }}
    >
      <Button
        sx={{
          borderRadius: 100,
          bgcolor: "#94ADD7",
          color: "white",
          width: "100px",
          height: "100px",
          "&:hover": {
            color: "black",
            border: "1px solid grey",
          },
        }}
      >
        {operator}
      </Button>
    </Grid>
  );
};

export default OperatorBtn;
