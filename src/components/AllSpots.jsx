import React from "react";
import CardComponent from "./CardComponent";

const AllSpots = ({ experiences }) => {
  return experiences.map((element) => {
    return <CardComponent key={element.name} experience={element} />;
  });
};

export default AllSpots;
