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

const SignUp = () => {
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();
  const [infos, setInfos] = useState({ username: "", email: "", password: "" }); // state pour updater les infos de l'utilisateur quand il signup.

  //Permet de gerer l'envoie du formulaire. on envoie les infos de l utilisateur a user/signup puis on e redirige a login.
  const handleSignupSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://bestspot.herokuapp.com/user/signup", infos)

      .then((response) => {
        console.log(response);
        navigate("/login");
      })

      .catch((error) => {
        setErrorMessage("nope");
      });
  };

  // Permet de gerer le changement d'etat dans les inuts.
  const handleChange = (event) => {
    setInfos({ ...infos, [event.target.name]: event.target.value });
  };

  return (
    <React.Fragment>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Signup
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
            <form onSubmit={handleSignupSubmit}>
              <TextField
                label="Username"
                value={infos.username}
                name="username"
                placeholder="Username"
                onChange={handleChange}
                required
              />
              <TextField
                label="Email"
                value={infos.email}
                name="email"
                placeholder="Email"
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
              {/* <TextField
                label="ConfirmationPassword"
                placeholder="Password"
                required
              /> */}
              <Button type={"submit"}>Sign up</Button>{" "}
              {/* insertion du boutton signup */}
              <p>Already have account?</p>
              <Link to={"/login"}>Login</Link>
            </form>
          </Typography>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
};

export default SignUp;
