import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import {
  DeleteProject,
  DeletedProject,
} from "../../Store/Reducers/ProjectReducer";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ProjectSummery = ({ value, id }) => {
  const createdAt = new Date(value.project.createTime).toLocaleString();
  console.log(id);

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    let project = {
      ...value,
      deletedTime: new Date().toISOString(),
    };
    dispatch(DeleteProject(id));
    console.log("Projects Deleted!", id);
    dispatch(DeletedProject(project));
  };

  return (
    <div>
      <Accordion sx={{ margin: 1 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{value.project.title}</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Card variant="text">
            <CardContent>
              <Typography
                variant="h4"
                component="div"
                sx={{ display: "flex", justifyContent: "start" }}
              >
                {value.project.title}
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ mb: 1.5, display: "flex", justifyContent: "start" }}
              >
                Posted By {value.project.email} at {createdAt}
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: "flex", justifyContent: "start" }}
              >
                {value.project.content}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">More</Button>
              <Button
                size="small"
                color="error"
                onClick={() => handleDelete(id)}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ProjectSummery;
