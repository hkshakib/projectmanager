import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  DeleteProject,
  DeletedProject,
} from "../../Store/Reducers/ProjectReducer";

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Modal,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import CollapseMoreIcon from "@mui/icons-material/CollapseMore";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid gray",
  boxShadow: 1,
  p: 4,
};

const ProjectSummery = ({ value, id }) => {
  const [open, setOpen] = useState(null);
  const handleOpen = () => setOpen(id);
  const handleClose = () => setOpen(null);

  const { title, email, createTime, content } = value.project;
  const createdAt = new Date(createTime).toLocaleString();
  const dispatch = useDispatch();

  const handleDelete = () => {
    const project = {
      ...value,
      deletedTime: new Date().toISOString(),
    };
    dispatch(DeleteProject(id));
    dispatch(DeletedProject(project));
    handleClose();
  };

  return (
    <div>
      <Accordion sx={{ margin: 1 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          // collapseIcon={<CollapseMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Card variant="text">
            <CardContent>
              <Typography variant="h4" component="div">
                {title}
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 1.5 }}>
                Posted By {email} at {createdAt}
              </Typography>
              <Typography variant="body2">{content}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">More</Button>
              <Button size="small" color="error" onClick={handleOpen}>
                Delete
              </Button>
            </CardActions>
          </Card>
        </AccordionDetails>
      </Accordion>
      <Modal
        open={open === id}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="p"
            fontSize={16}
          >
            Do you want to delete this project? This Can't Be undone!
          </Typography>
          <Typography
            sx={{ display: "flex", justifyContent: "center", pt: 8, gap: 4 }}
          >
            <Button variant="outlined" color="primary" onClick={handleClose}>
              NO
            </Button>
            <Button variant="outlined" color="error" onClick={handleDelete}>
              YES
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ProjectSummery;
