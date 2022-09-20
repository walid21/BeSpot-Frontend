import * as React from "react";
import Modal from "@mui/joy/Modal";
import Button from "@mui/joy/Button";
import { useState } from "react";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  const [open, setOpen] = useState(false);

  const storedToken = localStorage.getItem("authToken");
  // If the token exists in the localStorage
  function isLoggedIn() {
    if (!storedToken) {
      return (
        <>
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
            <SignUpForm setOpen={setOpen} />
          </Modal>
        </>
      );
    } else {
      return;
    }
  }

  return isLoggedIn();
};

export default SignUp;
