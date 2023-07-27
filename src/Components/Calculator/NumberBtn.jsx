import { Button, Grid } from "@mui/material";
import React from "react";

const NumberBtn = ({ number }) => {
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
      <Button fullWidth>{number}</Button>
    </Grid>
  );
};

export default NumberBtn;