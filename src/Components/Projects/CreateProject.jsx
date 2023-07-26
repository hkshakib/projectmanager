import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { AddProject } from "../../Store/Reducers/ProjectReducer";

import { getAuth } from "firebase/auth";

import {
  Button,
  TextField,
  Box,
  Typography,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MiniDrawer from "../Layout/MiniDrawer";

const CreateProject = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [objective, setObjective] = useState("");
  const [deadline, setDeadline] = useState(null);
  const [priority, setPriority] = useState("");

  const Auth = getAuth();

  const handleAddProject = (e) => {
    e.preventDefault();
    let project = {
      email: Auth.currentUser.email,
      title,
      content,
      objective,
      createTime: new Date().toISOString(),
      deadline: deadline ? deadline.toISOString() : null,
      priority,
    };
    console.log(project);
    dispatch(AddProject(project));
    setTitle("");
    setContent("");
    setDeadline(null);
    setPriority("");
    setObjective("");
    navigate("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <MiniDrawer />
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
            multiline
            name="description"
            label="Description"
            type="text"
            id="description"
            autoComplete="description"
            onChange={(e) => setContent(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            multiline
            name="objective"
            label="Objective"
            type="text"
            id="description"
            autoComplete="objective"
            onChange={(e) => setObjective(e.target.value)}
          />
          <FormControl fullWidth sx={{ mt: 1, mb: 1 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                format="MM/DD/YYYY"
                label="Dead Line *"
                value={deadline}
                onChange={(newDeadLine) => setDeadline(newDeadLine)}
                slotProps={{ textField: { placeholder: "MM/DD/YYYY" } }}
                required
              />
            </LocalizationProvider>
          </FormControl>

          <FormControl fullWidth sx={{ mt: 1 }}>
            <InputLabel>Set Priority *</InputLabel>
            <Select
              value={priority}
              label="Set Priority"
              onChange={(e) => setPriority(e.target.value)}
              required
            >
              {["LOW", "MEDIUM", "HIGH"].map((text, index) => (
                <MenuItem value={text} key={index} sx={{ fontSize: 14 }}>
                  {text}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

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
