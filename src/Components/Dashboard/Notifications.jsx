import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

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
  const data = useSelector((state) => state.projects.projects);
  const len = data.length;
  const Projects = len > 0 ? data : null;
  console.log({ Projects: Projects });

  if (!len) {
    return <Typography>No Notification available</Typography>;
  }

  return (
    <>
      <Typography variant="h3" component="span">
        Notifications
      </Typography>
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
    </>
  );
};

export default Notifications;
