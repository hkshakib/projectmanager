import { Button, Grid } from "@mui/material";
import React from "react";

const OperandBtn = ({ operand }) => {
  return (
    <Grid
      md={3}
      sx={{
        boxShadow: 0,
        display: "flex",
        justifyContent: "center",
        bgcolor: "#E8FFCE",
      }}
    >
      <Button fullWidth sx={{ color: "black" }}>
        {operand}
      </Button>
    </Grid>
  );
};

export default OperandBtn;
