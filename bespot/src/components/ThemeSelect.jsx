import React from "react";

const ThemeSelect = () => {
  <Autocomplete
    disablePortal
    id="combo-box-demo"
    options={allActivities}
    sx={{ width: 300 }}
    renderInput={(params) => (
      <TextField {...params} label="Choose your Activity" />
    )}
  />;
};

export default ThemeSelect;
