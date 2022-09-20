import { useParams } from "react-router-dom";

const Spot = ({ experiences }) => {
  const { id } = useParams();

  const spot = experiences.find((element) => {
    return element._id === id;
  });

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
