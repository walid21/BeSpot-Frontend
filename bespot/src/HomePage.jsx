import React from "react";
import AllSpots from "./components/AllSpots";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Autocomplete } from "@mui/material";
import CountrySelect from "./components/CountrySelect";
import ActivitySelect from "./components/ActivitySelect";

const HomePage = ({ experiences }) => {
  if (!experiences) {
    return <p>loading...</p>;
  }
  return (
    <div>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            BeSpot
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Here is Your Fav Website : BESPOT
          </Typography>

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
        </Container>
        <Container class="container">
          <CountrySelect />
          <ActivitySelect />
          <CountrySelect />
        </Container>
      </Box>

      {/* End hero unit */}
      <body className="homepage-body">
        <h1 className="title_item">Best Rated</h1>
        <AllSpots experiences={experiences} />
        <h1 className="title_item">Last Bespot</h1>
        <AllSpots experiences={experiences} />
        <h1 className="title_item">Reco for Ya</h1>
        <AllSpots experiences={experiences} />
      </body>
    </div>
  );
};

export default HomePage;
