import React from "react";
import CardComponent from "./CardComponent";

const AllSpots = ({ experiences }) => {
  return experiences
    .map((element) => {
      return <CardComponent key={element.name} experience={element} />;
    })
    .slice(0, 4);
};

export default AllSpots;
