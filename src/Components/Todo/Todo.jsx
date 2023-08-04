import { Box, Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  console.log(todo);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", mt: 10 }}>
      <Container maxWidth="md" sx={{ display: "flex", gap: 2 }}>
        <TextField
          fullWidth
          label="Add Your Todos"
          id="fullWidth"
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button variant="outlined" sx={{ height: "55px", width: "200px" }}>
          ADD TODO
        </Button>
      </Container>
    </Box>
  );
};

export default Todo;
