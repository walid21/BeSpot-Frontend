import * as React from "react";

import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Sheet from "@mui/joy/Sheet";
import TextField from "@mui/joy/TextField";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateSpot = ({ setExperiences }) => {
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();
  const [infos, setInfos] = useState({ name: "", location: "", theme: "", description: "", activity: "", picture: "" }); // state pour updater les infos de l'utilisateur quand il signup.

  //Permet de gerer l'envoie du formulaire. on envoie les infos de l utilisateur a user/signup puis on e redirige a login.
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const property in infos) {
      formData.append(property, infos[property]);
    }
    const token = localStorage.getItem("authToken");
    axios({
      method: "post",
      baseURL: "https://bestspot.herokuapp.com/experience/create",
      headers: { Authorization: `Bearer ${token}` },
      data: formData,
    })
      .then((response) => {
        alert("New BeSpot created");
        const newExperience = response.data.experience;
        delete newExperience._id;
        delete newExperience.userId;
        delete newExperience.__v;
        console.log(response.data.experience);
        setExperiences((current) => [...current, newExperience]);
        navigate("/");
      })

      .catch((error) => {
        setErrorMessage("The Spot creation didn't go trough, try again");
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
          <TextField label="name" value={infos.name} name="name" placeholder="Name" onChange={handleChange} required />
          <TextField label="location" value={infos.location} name="location" placeholder="Location" onChange={handleChange} required />
          <TextField label="theme" value={infos.theme} name="theme" placeholder="Theme" onChange={handleChange} required />
          <TextField label="description" value={infos.description} name="description" placeholder="description" onChange={handleChange} required />
          <TextField label="activity" value={infos.activity} name="activity" placeholder="Activity" onChange={handleChange} required />

          <input
            type="file"
            id="picture"
            name="picture"
            accept="image/png, image/jpeg"
            onChange={(element) => setInfos({ ...infos, picture: element.target.files[0] })}
          />
          {/* <ImageUploading
            value={[]}
            onChange={(element) => setInfos({ ...infos, picture: element.target.files[0] })}
            maxNumber={1}
            dataURLKey="data_url"
            acceptType={["jpg"]}
          >
            {console.log(infos)}
            {({ infos, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
              // write your building UI

              <div className="upload__image-wrapper">
                <button style={isDragging ? { color: "red" } : null} startIcon={<UploadFileIcon />} onClick={onImageUpload} {...dragProps}>
                  Click or Drop here
                </button>

                {
                  <div className="image-item">
                    <img src={URL.createObjectURL(infos.picture)} alt="" width="100" />
                    <div className="image-item__btn-wrapper">
                      <button onClick={() => onImageUpdate(0)}>Update</button>
                      <button onClick={() => onImageRemove(0)}>Remove</button>
                    </div>
                  </div>
                }
              </div>
            )}
          </ImageUploading> */}
          {errorMessage && <p>{errorMessage}</p>}
          <Button
            type={"submit"}
            onSubmit={() => {
              console.log("New Spot created");
            }}
          >
            BePost
          </Button>
        </form>
      </Typography>
    </Sheet>
  );
};

export default CreateSpot;
