import React from "react";
import { Box, Container, Grid } from "@mui/material";

import OperatorBtn from "./OperatorBtn";
import BigBtn from "./BigBtn";
import OperandBtn from "./OperandBtn";
import NumberBtn from "./NumberBtn";

const Calculator = () => {
  return (
    <Box>
      <Container maxWidth="md">
        <Grid container sx={{ pt: 4 }}>
          <Grid item xs={12} md={12}>
            <Grid
              height={100}
              sx={{
                boxShadow: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#A6E1ED",
              }}
            >
              207
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            height={100}
            sx={{
              boxShadow: 0,
              display: "flex",
              justifyContent: "center",
              bgcolor: "white",
            }}
          >
            <BigBtn operator={"AC"} />
            <OperandBtn operand={"DEL"} />
            <OperatorBtn operator={"÷"} />
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            height={100}
            sx={{
              boxShadow: 0,
              display: "flex",
              justifyContent: "center",
              bgcolor: "white",
            }}
          >
            <NumberBtn number={1} />
            <NumberBtn number={2} />
            <NumberBtn number={3} />
            <OperatorBtn operator={"*"} />
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            height={100}
            sx={{
              boxShadow: 0,
              display: "flex",
              justifyContent: "center",
              bgcolor: "white",
            }}
          >
            <NumberBtn number={4} />
            <NumberBtn number={5} />
            <NumberBtn number={6} />
            <OperatorBtn operator={"+"} />
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            height={100}
            sx={{
              boxShadow: 0,
              display: "flex",
              justifyContent: "center",
              bgcolor: "white",
            }}
          >
            <NumberBtn number={7} />
            <NumberBtn number={8} />
            <NumberBtn number={9} />
            <OperatorBtn operator={"-"} />
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            height={100}
            sx={{
              boxShadow: 0,
              display: "flex",
              justifyContent: "center",
              bgcolor: "white",
            }}
          >
            <NumberBtn number={"."} />
            <NumberBtn number={0} />
            <BigBtn operator={"="} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Calculator;
