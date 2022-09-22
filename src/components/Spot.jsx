import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Spot = ({ experiences }) => {
  const { id } = useParams();
  const [spot, setSpot] = useState({});

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
        setSpot(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const styleImg = { width: "60%" };

  return (
    <>
      <h1>{spot.description}</h1>
      <img style={styleImg} src={spot.picture} alt="picture_spot" />
      <h1>Name : {spot.name}</h1>
      <h1>Theme : {spot.theme}</h1>
      <h1>Location : {spot.location}</h1>
      <h1>Activity : {spot.activity}</h1>
    </>
  );
};

export default Spot;
