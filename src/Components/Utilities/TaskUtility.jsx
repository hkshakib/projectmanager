import { Box, Button, Typography } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useSelector } from "react-redux";

const TaskUtility = () => {
  const lastName = useSelector((state) => state.auth.user.lastName);
  const UserName = lastName;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 2,
      }}
    >
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
      <Box sx={{ display: "flex" }}>
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
      </Box>
    </Box>
  );
};

export default TaskUtility;
