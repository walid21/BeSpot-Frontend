import React from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const ActivitySelect = () => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-activity"
      options={allActivities}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Choose your Activity" />
      )}
    />
  );
};

// Activities list

const allActivities = [
  { label: "Archery" },
  { label: "Badminton" },
  { label: "Baseball" },
  { label: "Basketball" },
  { label: "Beach-Volleyball" },
  { label: "Badminton" },
  { label: "Baseball" },
  { label: "Basketball" },
  { label: "Beach-Volleyball" },
  { label: "Beekeeping" },
  { label: "Birdwatching" },
  { label: "Bodyboarding" },
  { label: "Camping" },
  { label: "Canoeing" },
  { label: "Capture-the-Flag" },
  { label: "Cross-country" },
  { label: "Skiing" },
  { label: "Cycling" },
  { label: "Diving" },
  { label: "Dodgeball" },
  { label: "Dragon" },
  { label: "Boat" },
  { label: "Racing" },
  { label: "Fishing" },
  { label: "Football" },
  { label: "Free-Play" },
  { label: "Frisbee" },
  { label: "Gardening" },
  { label: "Hide-and-Seek" },
  { label: "Hiking" },
  { label: "Hopscotch" },
  { label: "Horseback" },
  { label: "Riding" },
  { label: "Ice-Skating" },
  { label: "Inline-Skating" },
  { label: "Kayaking" },
  { label: "Kite-Flying" },
  { label: "Landscape-Painting" },
  { label: "Lawn-Bowling" },
  { label: "Mountaineering" },
  { label: "Outrigger" },
  { label: "Canoeing" },
  { label: "Photography" },
  { label: "Picnics" },
  { label: "Rock-Climbing" },
  { label: "Rowing" },
  { label: "Running" },
  { label: "Sailing" },
  { label: "Sightseeing" },
  { label: "Skateboarding" },
  { label: "Skiing" },
  { label: "Skipping-Rope" },
  { label: "Snorkelling" },
  { label: "Snowboarding" },
  { label: "Soccer" },
  { label: "Sunbathing" },
  { label: "Surfing" },
  { label: "Swimming" },
  { label: "Tag" },
  { label: "Tennis" },
  { label: "Tobogganing" },
  { label: "Trampolining" },
  { label: "Tug-of-War" },
  { label: "Walking" },
  { label: "Water-Fight" },
  { label: "Windsurfing" },
  { label: "Beekeeping" },
];

export default ActivitySelect;
