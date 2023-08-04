import React, { useState } from "react";

import { useSelector } from "react-redux";

import Box from "@mui/material/Box";

import ProjectSummery from "./ProjectSummery";
import { Pagination } from "@mui/material";

const ProjectList = () => {
  const data = useSelector((state) => state.projects.projects);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const handlePageChange = (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const CurrentProject = data?.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Box sx={{ boxShadow: 0 }}>
      {CurrentProject &&
        CurrentProject.map((project) => {
          return (
            <ProjectSummery value={project} id={project.id} key={project.id} />
          );
        })}
      <Pagination
        count={Math.ceil(data?.length / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        sx={{ mt: 4 }}
      />
    </Box>
  );
};
export default ProjectList;
