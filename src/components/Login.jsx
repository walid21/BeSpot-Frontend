import { useState } from "react";

import Modal from "@mui/joy/Modal";
import Button from "@mui/joy/Button";
import LoginForm from "./LoginForm";

const LogIn = () => {
  const [open, setOpen] = useState(false);

  const storedToken = localStorage.getItem("authToken");
  // If the token exists in the localStorage

  function isLoggedIn() {
    if (!storedToken) {
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
            <LoginForm setOpen={setOpen} />
          </Modal>
        </>
      );
    } else {
      return;
    }
  }

  return isLoggedIn();
};

export default LogIn;
