import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { getAuth, signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Avatar } from "@mui/material";

const settings = ["Logout"];

const Navbar = () => {
  const user = useSelector((state) => state.auth.value);

  const auth = getAuth();
  let userAvatar = auth.currentUser?.email[0] + auth.currentUser?.email[1];
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: 1 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 500,
              // letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            <ManageAccountsOutlinedIcon />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                color: "black",
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                >
                  {!user && (
                    <>
                      <Button
                        href="/signup"
                        variant="text"
                        sx={{ color: "black" }}
                        startIcon={<HowToRegOutlinedIcon />}
                      >
                        Signup
                      </Button>
                      <Button
                        href="/signin"
                        variant="text"
                        sx={{ color: "black" }}
                        startIcon={<LoginOutlinedIcon />}
                      >
                        Signin
                      </Button>
                    </>
                  )}
                  <Button
                    href="/create"
                    variant="outlined"
                    sx={{ color: "black" }}
                    startIcon={<AddOutlinedIcon />}
                  >
                    Create Project
                  </Button>
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
                      logout
                    </Button>
                  )}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              // letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            <ManageAccountsOutlinedIcon />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: { md: "center" },
              gap: { md: 10 },
              color: { md: "grey" },
            }}
          >
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "black", display: "block" }}
            />
            {!user && (
              <>
                <Button
                  href="/signup"
                  variant="text"
                  sx={{ color: "black" }}
                  startIcon={<HowToRegOutlinedIcon />}
                >
                  Signup
                </Button>
                <Button
                  href="/signin"
                  variant="text"
                  sx={{ color: "black" }}
                  startIcon={<LoginOutlinedIcon />}
                >
                  Signin
                </Button>
              </>
            )}
            <Button
              href="/create"
              variant="text"
              sx={{ color: "black" }}
              startIcon={<AddOutlinedIcon />}
            >
              Create Project
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Typography
                  variant="overline"
                  display="block"
                  gutterBottom
                  sx={{ marginRight: 2, marginTop: 1 }}
                >
                  {user && auth.currentUser.email}
                </Typography>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg">
                  {userAvatar}
                </Avatar>
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
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
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
