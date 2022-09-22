import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CardComponent from "./CardComponent";
import { useNavigate } from "react-router-dom";

const Profile = ({ users }) => {
  const [myExperiences, setMyExperiences] = useState([]);
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    let config = {
      method: "get",
      url: "http://localhost:5005/experience/search?userId=me",
      headers: { Authorization: `Bearer ${token}` },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setMyExperiences(response.data);
        setClick(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [click]);

  //DEL USER EXPERIENCE
  function deleteExperience(id) {
    const config = {
      method: "delete",
      url: `http://localhost:5005/experience/${id}`,
      headers: { Authorization: `Bearer ${token}` },
    };

    axios(config)
      .then(function (response) {
        console.log("deleted");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  if (myExperiences.length === 0) {
    return <h1>LOADING...</h1>;
  }
  return (
    <>
      <h1>Your BeSpotter profile</h1>
      <div>
        {myExperiences.map((e) => {
          return (
            <>
              <CardComponent key={e._id} experience={e} />
              <button
                onClick={() => {
                  navigate(`/update/${e._id}`);
                  setClick(true);
                }}
              >
                Update
              </button>
              <button
                onClick={() => {
                  deleteExperience(e._id);
                  setClick(true);
                }}
              >
                Delete
              </button>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Profile;
