import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CardComponent from "./CardComponent";

const Profile = ({ users }) => {
  const [myExperiences, setMyExperiences] = useState([]);
  const [click, setClick] = useState(false);

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

  //DEL USER ACCOUNT
  function deleteExperience(id) {
    console.log(id);
    const config = {
      method: "delete",
      url: `http://localhost:5005/experience/${id}`,
      headers: { Authorization: `Bearer ${token}` },
    };

    axios(config)
      .then(function (response) {
        console.log("delete");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  if (myExperiences.length === 0) {
    return <h1>loading</h1>;
  }
  return (
    <>
      <h1>Your BeSpotter profile</h1>
      <div>
        {myExperiences.map((e) => {
          return (
            <>
              <CardComponent key={e._id} experience={e} />
              <button onClick={() => console.log("update")}>Update</button>
              <button
                onClick={() => {
                  deleteExperience(e._id);
                  setClick(true);
                }}
              >
                Remove
              </button>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Profile;
