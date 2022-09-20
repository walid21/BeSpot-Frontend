import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import HomePage from "./HomePage";
import AllSpots from "./components/AllSpots";
import Profile from "./components/Profile";
import LoginPage from "./components/LoginPage";

function App() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    let config = {
      method: "get",
      url: "https://bestspot.herokuapp.com/experience",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        //console.log(JSON.stringify(response.data));
        setExperiences(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(experiences);

  return (
    <div className="App">
      <header className="website-header">
        <ResponsiveAppBar />
        <Routes>
          <Route
            path="/experiences"
            element={<AllSpots experiences={experiences} />}
          />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/" element={<HomePage experiences={experiences} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
