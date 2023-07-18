import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

// import { useDispatch } from "react-redux";

// import create from "../../Store/Reducers/ProjectReducer";

const CreateProject = () => {
  // const dispatch = useDispatch();

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
          // onSubmit={dispatch(create())}
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
