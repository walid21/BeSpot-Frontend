import * as React from "react";

import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Sheet from "@mui/joy/Sheet";
import TextField from "@mui/joy/TextField";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateSpot = ({ setExperiences }) => {
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [infos, setInfos] = useState({
    name: "",
    location: "",
    theme: "",
    description: "",
    activity: "",
    picture: "",
  }); // state pour updater les infos de l'utilisateur quand il signup.

  useEffect(() => {
    let config = {
      method: "get",
      url: `http://localhost:5005/experience/${id}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("authToken"),
      },
    };

    axios(config)
      .then(function (response) {
        setInfos(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  //Permet de gerer l'envoie du formulaire. on envoie les infos de l utilisateur a user/signup puis on e redirige a profile.
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const property in infos) {
      formData.append(property, infos[property]);
    }
    const token = localStorage.getItem("authToken");
    axios({
      method: "patch",
      baseURL: `https://bestspot.herokuapp.com/experience/${id}`,
      headers: { Authorization: `Bearer ${token}` },
      data: formData,
    })
      .then((response) => {
        alert("BeSpot updated");
        const newExperience = response.data;
        delete newExperience._id;
        delete newExperience.userId;
        delete newExperience.__v;
        //console.log(response.data.experience);
        setExperiences((current) => [...current, newExperience]);
        navigate("/Profile");
        setClick(false);
      })

      .catch((error) => {
        console.log(error);
        setErrorMessage("The Spot has not been updated");
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
      <Typography component="h2" id="close-modal-title" level="h4" textColor="inherit" fontWeight="lg">
        <form onSubmit={handleSignupSubmit}>
          <TextField label="name" value={infos.name} name="name" defaultValue={infos.name} placeholder="Name" onChange={handleChange} />
          <TextField label="location" value={infos.location} name="location" defaultValue={infos.location} placeholder="Location" onChange={handleChange} />
          <TextField label="theme" value={infos.theme} name="theme" defaultValue={infos.theme} placeholder="Theme" onChange={handleChange} />
          <TextField
            label="description"
            value={infos.description}
            name="description"
            defaultValue={infos.description}
            placeholder="description"
            onChange={handleChange}
          />
          <TextField label="activity" value={infos.activity} name="activity" defaultValue={infos.activity} placeholder="Activity" onChange={handleChange} />

          <input
            type="file"
            id="picture"
            name="picture"
            accept="image/png, image/jpeg"
            onChange={(element) => setInfos({ ...infos, picture: element.target.files[0] })}
          />

          {errorMessage && <p>{errorMessage}</p>}
          <Button
            type={"submit"}
            onSubmit={() => {
              console.log("Spot updated");

              setClick(true);
            }}
          >
            BeUpdate
          </Button>
        </form>
      </Typography>
    </Sheet>
  );
};

export default UpdateSpot;
