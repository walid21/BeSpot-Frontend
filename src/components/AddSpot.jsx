import React from "react";
import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const AddSpot = () => {
  const navigate = useNavigate();
  return (
    <Button
      className="flex"
      startdecorator={<Add />}
      onClick={() => navigate("/create")}
    >
      Create your Spot
    </Button>
  );
};

export default AddSpot;
