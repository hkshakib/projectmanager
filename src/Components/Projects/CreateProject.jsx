import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { AddProject } from "../../Store/Reducers/ProjectReducer";
import { getAuth } from "firebase/auth";

// import create from "../../Store/Reducers/ProjectReducer";

const CreateProject = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.value);
  const name = useSelector((state) => state);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [userFirstName, setUserFirstName] = useState("");
  // const [userLastName, setUserLastName] = useState("");

  const Auth = getAuth();
  console.log("name: ", name);

  const handleAddProject = (e) => {
    e.preventDefault();
    let project = {
      authorFirstName: Auth.currentUser.userFirstName,
      authorLastName: Auth.currentUser.userLastName,
      title,
      content,
    };
    dispatch(AddProject(project));
    setTitle("");
    setContent("");
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
