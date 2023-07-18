import * as React from "react";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

import ProjectSummery from "./ProjectSummery";

const ProjectList = () => {
  const data = useSelector((state) => state.projects.projects);
  console.log(data);
  return (
    <Box>
      {data.map((da) => {
        return <ProjectSummery value={da} />;
      })}
    </Box>
  );
};
export default ProjectList;
