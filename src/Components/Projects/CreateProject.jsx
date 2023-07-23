import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { AddProject } from "../../Store/Reducers/ProjectReducer";

import { getAuth } from "firebase/auth";

import { Button, TextField, Box, Typography, Container } from "@mui/material";

const CreateProject = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const Auth = getAuth();

  const handleAddProject = (e) => {
    e.preventDefault();
    let project = {
      email: Auth.currentUser.email,
      title,
      content,
      createTime: new Date().toISOString(),
    };
    console.log(project);
    dispatch(AddProject(project));
    setTitle("");
    setContent("");
    navigate("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Create New Project
        </Typography>
        <Box
          component="form"
          onSubmit={handleAddProject}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="Project Title"
            name="Title"
            autoComplete="Title"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="description"
            label="Description"
            type="text"
            id="description"
            autoComplete="description"
            onChange={(e) => setContent(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CreateProject;
