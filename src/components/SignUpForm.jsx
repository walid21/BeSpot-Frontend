import * as React from "react";

import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Sheet from "@mui/joy/Sheet";
import TextField from "@mui/joy/TextField";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUpForm = ({ setOpen }) => {
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();
  const [infos, setInfos] = useState({ username: "", email: "", password: "" }); // state pour updater les infos de l'utilisateur quand il signup.

  //Permet de gerer l'envoie du formulaire. on envoie les infos de l utilisateur a user/signup puis on e redirige a login.
  const handleSignupSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://bestspot.herokuapp.com/user/signup", infos)

      .then((response) => {
        alert("vous avez bien crée un compte");
        navigate("/");
      })

      .catch((error) => {
        setErrorMessage("Le compte n'as pas été crée");
      });
  };

  // Permet de gerer le changement d'etat dans les inputs.
  const handleChange = (event) => {
    setInfos({ ...infos, [event.target.name]: event.target.value });
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
        <form onSubmit={handleSignupSubmit}>
          <TextField label="Username" value={infos.username} name="username" placeholder="Username" onChange={handleChange} required />
          <TextField label="Email" value={infos.email} name="email" placeholder="Email" onChange={handleChange} required />
          <TextField label="Password" value={infos.password} name="password" type={"password"} placeholder="Password" onChange={handleChange} required />
          {/* <TextField
                label="ConfirmationPassword"
                placeholder="Password"
                required
              /> */}
          {errorMessage && <p>{errorMessage}</p>}
          <Button
            type={"submit"}
            onSubmit={() => {
              console.log("vous êtes bien inscrit!");
            }}
          >
            Sign up
          </Button>{" "}
          {/* insertion du boutton signup */}
          <p>Already have account?</p>
          <Link to={"/login"} onClick={() => setOpen(false)}>
            Login
          </Link>
        </form>
      </Typography>
    </Sheet>
  );
};

export default SignUpForm;
