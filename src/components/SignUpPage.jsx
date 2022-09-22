import React from "react";
import Modal from "@mui/joy/Modal";
import { useNavigate } from "react-router-dom";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Modal
        aria-labelledby="close-modal-title"
        open={true}
        onClose={() => navigate(-1)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SignUpForm />
      </Modal>
    </>
  );
};

export default SignUpPage;
