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
import avatarImg from "../image/avatar_icone.png";
import AddSpot from "../components/AddSpot";

const settings = ["Profile", "Logout"];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const ResponsiveAppBar = ({ setOpen, users }) => {
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
    setOpen(false);
  };

  const storedToken = localStorage.getItem("authToken");
  // If the token exists in the localStorage
  function isLoggedIn() {
    if (storedToken) {
      return (
        <>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="user_avatar" src={avatarImg} />
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
          <AddSpot />
        </>
      );
    } else {
      return (
        <>
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
              pl: 4,
              borderLeft: "1px solid",
              borderColor: "divider",
            }}
          ></Sheet>
        </>
      );
    }
  }

  return (
    <>
      <AppBar className="appbar" position="static">
        <Container maxWidth="xl">
          <Toolbar className="main-toolbar" disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box>{isLoggedIn()}</Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default ResponsiveAppBar;
