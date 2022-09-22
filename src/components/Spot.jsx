import { useParams } from "react-router-dom";
import "./Spot.css";
const Spot = ({ experiences }) => {
  const { id } = useParams();

  const spot = experiences.find((element) => {
    return element._id === id;
  });

  return (
    <>
      <li class="card">
        <h1>{spot.activity}</h1>
        <a class="card-image" src={spot.picture} alt="picture_spot">
          <img src={spot.picture} alt="Psychopomp" />
        </a>
        <button>{spot.theme}</button>
        <a class="card-description">
          <h2>{spot.name}</h2>

          <p>{spot.description}</p>
        </a>
      </li>
    </>
  );
};

export default Spot;
// return (
//   <>
//     <h1>{spot.description}</h1>
//     <img style={styleImg} src={spot.picture} alt="picture_spot" />
//     <h1>Name : {spot.name}</h1>
//     <h1>Theme : {spot.theme}</h1>
//     <h1>Location : {spot.location}</h1>
//     <h1>Activity : {spot.activity}</h1>
//   </>
// );
// };
