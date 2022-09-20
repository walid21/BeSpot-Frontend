import { useState } from "react";

import Modal from "@mui/joy/Modal";
import Button from "@mui/joy/Button";
import LoginForm from "./LoginForm";

const LogIn = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
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
        <LoginForm />
      </Modal>
    </>
  );
};

export default LogIn;
//avfv
