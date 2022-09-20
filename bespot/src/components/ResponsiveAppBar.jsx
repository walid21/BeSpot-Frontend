import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Sheet from "@mui/joy/Sheet";
import SignUp from "./SignUp";
import LogIn from "./Login";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "../context/auth_context";

const pages = ["We can add button here"];
const settings = ["Profile", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { setUser, removeToken } = useContext(AuthContext);
  const navigate = useNavigate();

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
  const handleLogout = (event) => {
    event.preventDefault();
    removeToken();
    setUser(null);
    navigate("/");
  };

  return (
    <AppBar class="appbar" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div class="title">MyBespot is the best</div>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            BeSpotsdcsdf
          </Typography>
          {/*Here is the map to create new button */}
          {/* <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box> */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(80px, 1fr))",
                gap: 1,
              }}
            >
              <SignUp />
              <LogIn />
            </Box>
            <Sheet
              sx={{
                background: "transparent",
                pl: 1,
                borderLeft: "1px solid",
                borderColor: "divider",
              }}
            >
              NAME OF MY USER
            </Sheet>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                    <Link
                      to={`/${setting}`}
                      onClick={setting === "Logout" && handleLogout}
                    >
                      {setting}
                    </Link>
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
export default ResponsiveAppBar;
