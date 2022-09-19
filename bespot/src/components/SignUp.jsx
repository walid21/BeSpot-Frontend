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

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://bestspot.herokuapp.com/user/signup")

      .then((response) => {
        navigate("/login");
      })

      .catch((error) => {
        setErrorMessage("nope");
      });
  };

  return (
    <React.Fragment>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        SignUp
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
              <TextField label="Username" placeholder="Username" required />
              <TextField label="Email" placeholder="Email" required />
              <TextField label="Password" placeholder="Password" required />
              {/* <TextField
                label="ConfirmationPassword"
                placeholder="Password"
                required
              /> */}
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
