import React, { useState } from "react";

import { useSelector } from "react-redux";

import PropTypes from "prop-types";

import {
  Box,
  Typography,
  Tabs,
  Tab,
  Divider,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Pagination,
} from "@mui/material";

import ImageIcon from "@mui/icons-material/Image";

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
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} day${days === 1 ? "" : "s"} and ${hours % 24} hour${
      hours % 24 === 1 ? "" : "s"
    } ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  } else {
    return `${seconds} second${seconds === 1 ? "" : "s"} ago`;
  }
};

const Notifications = () => {
  const [value, setValue] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentDeletedPage, setCurrentDeletedPage] = useState(1);

  const handleChange = (e, newValue) => {
    e.preventDefault();
    setValue(newValue);
  };

  const data = useSelector((state) => state.projects.projects);
  const deletedData = useSelector((state) => state.projects.deletedprojects);
  const len = data.length;
  const Projects =
    len > 0
      ? data
          .slice()
          .sort(
            (a, b) =>
              new Date(b.project.createTime) - new Date(a.project.createTime)
          )
      : null;

  const deletedLen = deletedData.length;
  const deletedProjects =
    deletedLen > 0
      ? deletedData
          .slice()
          .sort(
            (a, b) =>
              new Date(b.project.deletedTime) - new Date(a.project.deletedTime)
          )
      : null;

  const itemsPerPage = 3;
  const handlePageChange = (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  const handleDeletedPageChange = (event, page) => {
    event.preventDefault();
    setCurrentDeletedPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDeletedItems = deletedProjects?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const currentItems = Projects?.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider", boxShadow: 0 }}>
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

        {currentItems &&
          currentItems.map((project) => {
            return (
              <Box
                sx={{
                  minWidth: 275,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  alignItems: "center",
                  mb: 1.5,
                  border: "none",
                }}
                key={project.id}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <ImageIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography sx={{ fontSize: 16, fontWeight: 500 }}>
                        {project.project.title}
                      </Typography>
                    }
                    secondary={
                      <Typography sx={{ fontSize: 12 }}>
                        Created on{" "}
                        {getTimeDifference(project.project.createTime)}
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider
                  variant="inset"
                  component="li"
                  sx={{ listStyle: "none" }}
                />
              </Box>
            );
          })}
        <Pagination
          count={Math.ceil(Projects?.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          sx={{ mt: 4 }}
        />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        {!deletedProjects && <Typography>No Notification Available</Typography>}

        {currentDeletedItems &&
          currentDeletedItems.map((project) => {
            return (
              <Box
                sx={{
                  minWidth: 275,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  mb: 1.5,
                  border: "none",
                }}
                key={project.id}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <ImageIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography sx={{ fontSize: 16, fontWeight: 500 }}>
                        {project.project.project.title}
                      </Typography>
                    }
                    secondary={
                      <Typography sx={{ fontSize: 12 }}>
                        Deleted on{" "}
                        {getTimeDifference(project.project.deletedTime)}
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider
                  variant="inset"
                  component="li"
                  sx={{ listStyle: "none" }}
                />
              </Box>
            );
          })}
        <Pagination
          count={Math.ceil(deletedProjects?.length / itemsPerPage)}
          page={currentDeletedPage}
          onChange={handleDeletedPageChange}
          variant="outlined"
          shape="rounded"
          sx={{ mt: 4 }}
        />
      </CustomTabPanel>
    </>
  );
};

export default Notifications;
