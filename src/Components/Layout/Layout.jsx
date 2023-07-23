import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { FetchProjects } from "../../Store/Reducers/ProjectReducer";
import { Button, Container, Typography } from "@mui/material";
import Navbar from "./Navbar";
import ProjectList from "../Projects/ProjectList";
import Notifications from "../Dashboard/Notifications";
import { getAuth, signOut } from "firebase/auth";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import MiniDrawer from "./MiniDrawer";

const Layout = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.value);
  const auth = getAuth();

  useEffect(() => {
    dispatch(FetchProjects());
  }, [dispatch]);

  return (
    <Box>
      <Navbar />
      <Container maxWidth="xxl">
        <Grid container spacing={2} sx={{ pt: 4 }}>
          {/* <Grid item xs={12} md={3}> */}
          <MiniDrawer />
          {/* <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                {user && (
                  <Button
                    onClick={() => {
                      signOut(auth)
                        .then(() => {
                          console.log("user signed out");
                        })
                        .catch((error) => {
                          console.log("error", error);
                        });
                    }}
                    variant="text"
                    sx={{ color: "black" }}
                    startIcon={<LogoutOutlinedIcon />}
                  >
                    Logout
                  </Button>
                )}
              </Typography>
            </Paper> */}
          {/* </Grid> */}
          
          <Grid item xs={12} md={4}>
            {/* <Paper sx={{ p: 2, boxShadow: 0 }}> */}
              <Typography variant="h6" gutterBottom>
                Recents Projects
              </Typography>
              <ProjectList />
            {/* </Paper> */}
          </Grid>

          <Grid item xs={12} md={2}>
            
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Notifications
              </Typography>
              <Notifications />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Layout;
