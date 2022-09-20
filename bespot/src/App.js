import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import LogIn from "./components/Login";
import HomePage from "./HomePage";
import AllSpots from "./components/AllSpots";
import Profile from "./components/Profile";

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
          <Route path="/user/signup" element={<SignUp />} />
          <Route path="/experiences" element={<AllSpots experiences={experiences} />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/login" element={<LogIn />} />

          <Route path="/" element={<HomePage experiences={experiences} />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
