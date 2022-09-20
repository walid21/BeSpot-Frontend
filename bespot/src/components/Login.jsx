import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Sheet from "@mui/joy/Sheet";
import TextField from "@mui/joy/TextField";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth_context";
import { useContext } from "react";

const LogIn = () => {
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [infos, setInfos] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const { storeToken } = useContext(AuthContext);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://bestspot.herokuapp.com/auth/login", infos)
      .then((response) => {
        console.log("JWT token", response.data.authToken);
        storeToken(response.data.authToken);
        navigate("/home");
      })
      .catch((error) => {
        setErrorMessage("nope");
      });
  };

  const handleChange = (e) => {
    setInfos({ ...infos, [e.target.name]: e.target.value });
  };

  return (
    <React.Fragment>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Login
      </Button>
      <Modal
        aria-labelledby="close-modal-title"
        open={open}
        onClose={(event, reason) => {
          setOpen(false);
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            minWidth: 300,
            borderRadius: "md",
            p: 3,
          }}
        >
          <ModalClose variant="outlined" />
          <Typography
            component="h2"
            id="close-modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
          >
            <form onSubmit={handleLoginSubmit}>
              <TextField
                label="Username"
                value={infos.username}
                name="username"
                placeholder="Username"
                onChange={handleChange}
                required
              />
              <TextField
                label="Password"
                value={infos.password}
                name="password"
                type={"password"}
                placeholder="Password"
                onChange={handleChange}
                required
              />
              {errorMessage && <p>{errorMessage}</p>}
              <Button type={"submit"}>Login</Button>{" "}
              {/* insertion du boutton signup */}
              <p>
                Don't have an account ? Sign up to take part of the journey !
              </p>
              <Link to={"/signup"}>Sign up</Link>
            </form>
          </Typography>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
};

export default LogIn;
//avfv
