import * as React from "react";
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

const LoginForm = ({ setOpen }) => {
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [infos, setInfos] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const { storeToken } = useContext(AuthContext);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5005/auth/login", infos)
      .then((response) => {
        storeToken(response.data);
        setOpen(false);
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage("Wrong credentials");
      });
  };

  const handleChange = (e) => {
    setInfos({ ...infos, [e.target.name]: e.target.value });
  };

  return (
    <Sheet
      variant="outlined"
      sx={{
        minWidth: 300,
        borderRadius: "md",
        p: 3,
      }}
    >
      <ModalClose variant="outlined" />
      <Typography component="h2" id="close-modal-title" level="h4" textColor="inherit" fontWeight="lg">
        <form onSubmit={handleLoginSubmit}>
          <TextField label="Username" value={infos.username} name="username" placeholder="Username" onChange={handleChange} required />
          <TextField label="Password" value={infos.password} name="password" type={"password"} placeholder="Password" onChange={handleChange} required />
          {errorMessage && <p>{errorMessage}</p>}
          <Button type={"submit"}>Login</Button> {/* insertion du boutton signup */}
          <p>Don't have an account ? Sign up to take part of the journey !</p>
          <Link to={"/signup"} onClick={() => setOpen(false)}>
            Sign up
          </Link>
        </form>
      </Typography>
    </Sheet>
  );
};

export default LoginForm;
