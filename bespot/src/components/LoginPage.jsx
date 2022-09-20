import Modal from "@mui/joy/Modal";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";

const LoginPage = () => {
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
        <LoginForm />
      </Modal>
    </>
  );
};

export default LoginPage;
