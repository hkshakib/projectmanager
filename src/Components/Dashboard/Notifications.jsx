import { Box, Card, CardContent, Typography, Tabs, Tab } from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const getTimeDifference = (time) => {
  const currentTime = new Date();
  const postedTime = new Date(time);
  const timeDiffInMilliseconds = currentTime - postedTime;
  const seconds = Math.floor(timeDiffInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (hours > 0) {
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  } else {
    return `${seconds} second${seconds === 1 ? "" : "s"} ago`;
  }
};

const Notifications = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const data = useSelector((state) => state.projects.projects);
  const deletedData = useSelector((state) => state.projects.deletedprojects);
  console.log({ deletedData: deletedData });
  const len = data.length;
  const Projects = len > 0 ? data : null;
  console.log({ Projects: Projects });

  const deletedLen = deletedData.length;
  const deletedProjects = deletedLen > 0 ? deletedData : null;
  console.log({ deletedProjects: deletedProjects });

  return (
    <>
      <Typography variant="h3" component="span">
        Notifications
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Created Item" {...a11yProps(0)} />
          <Tab label="Deleted Item" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {!Projects && <Typography>No Notification Available</Typography>}

        {Projects &&
          Projects.map((project) => {
            return (
              <Box
                sx={{
                  minWidth: 275,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  width: 500,
                  mb: 1.5,
                  border: "none",
                }}
                key={project.id}
              >
                <Card variant="outlined">
                  <CardContent>
                    <Typography
                      variant="h4"
                      component="div"
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {project.project.title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ mb: 1.5, display: "flex", justifyContent: "start" }}
                    >
                      Posted By {project.project.email} at{" "}
                      {getTimeDifference(project.project.createTime)}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            );
          })}
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        {!deletedProjects && <Typography>No Notification Available</Typography>}

        {deletedProjects &&
          deletedProjects.map((project) => {
            return (
              <Box
                sx={{
                  minWidth: 275,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  width: 500,
                  mb: 1.5,
                  border: "none",
                }}
                key={project.id}
              >
                <Card variant="outlined">
                  <CardContent>
                    <Typography
                      variant="h4"
                      component="div"
                      sx={{ display: "flex", justifyContent: "start" }}
                    >
                      {project.project.title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ mb: 1.5, display: "flex", justifyContent: "start" }}
                    >
                      Posted By {project.project.email} at{" "}
                      {getTimeDifference(project.project.createTime)}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            );
          })}
      </CustomTabPanel>
    </>
  );
};

export default Notifications;
