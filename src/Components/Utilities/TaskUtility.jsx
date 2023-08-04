import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useSelector } from "react-redux";

const TaskUtility = () => {
  const lastName = useSelector((state) => state.auth.user.lastName);
  const UserName = lastName;
  return (
    <Stack direction="row" spacing={30}>
      <Typography variant="h5" gutterBottom>
        Good Morning,{" "}
        <span
          style={{
            color: "blue",
            font: "mono",
            textTransform: "uppercase",
          }}
        >
          {UserName}!
        </span>
      </Typography>
      <Button
        startIcon={<AddCircleOutlineIcon />}
        variant="outlined"
        sx={{
          background: "blue",
          color: "#fff",
          width: "200px",
          height: "30px",
          "&:hover": {
            color: "black",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
          }}
        >
          Add a new task
        </Typography>
      </Button>
    </Stack>
  );
};

export default TaskUtility;
