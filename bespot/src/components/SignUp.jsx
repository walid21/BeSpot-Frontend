import * as React from "react";
import Modal from "@mui/joy/Modal";
import Button from "@mui/joy/Button";
import { useState } from "react";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  const [open, setOpen] = useState(false);
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
};

export default SignUp;
