import React from "react";
import AllSpots from "./AllSpots";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import "../components/homePage.css";

// import CountrySelect from "./components/CountrySelect";
// import ActivitySelect from "./components/ActivitySelect";

const HomePage = ({ experiences }) => {
  if (!experiences) {
    return <p>loading...</p>;
  }
  return (
    <div className="flex">
      <Box
        className="background-image-homepage"
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <div>
          <p className="text-align title-home-page font-family">BeSpot</p>
          <p className=" font-family color">
            Here is Your Fav Website : BESPOT
          </p>

          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Link to="/experiences">
              <Button variant="contained" component="a" href="/experiences">
                Search a BeSpot
              </Button>
            </Link>
          </Stack>
        </div>
        <Container class="container">{/* <CountrySelect /> */}</Container>
      </Box>

      {/* End hero unit */}
      <body className="homepage-body">
        <AllSpots experiences={experiences} />

        <AllSpots experiences={experiences} />

        <AllSpots experiences={experiences} />
      </body>
    </div>
  );
};

export default HomePage;
