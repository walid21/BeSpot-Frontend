import "./App.css";

import CardComponent from "./components/CardComponent";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    let config = {
      method: "get",
      url: "https://bestspot.herokuapp.com/experience",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        //console.log(JSON.stringify(response.data));
        setExperience(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(experience);

  return (
    <div className="App">
      <header className="website-header">
        <ResponsiveAppBar />
      </header>

      <body className="homepage-body">
        <h1 className="title_item">Best Rated</h1>;
        <CardComponent experience={experience} />;<h1 className="title_item">Last Bespot</h1>;
        <CardComponent experience={experience} />;<h1 className="title_item">Reco for Ya</h1>;
        <CardComponent experience={experience} />;
      </body>
    </div>
  );
}

export default App;
