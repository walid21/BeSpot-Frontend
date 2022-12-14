import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, useParams } from "react-router-dom";
import HomePage from "./components/HomePage";
import AllSpots from "./components/AllSpots";
import Profile from "./components/Profile";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import Spot from "./components/Spot";
import CreateSpot from "./components/CreateSpot";
import UpdateSpot from "./components/UpdateSpot";

function App() {
  const [experiences, setExperiences] = useState([]);
  const [logged, setLogged] = useState(false);
  const [users, setUsers] = useState([]);
  const [infos, setInfos] = useState({ username: "", password: "" });
  const { id } = useParams();

  const updateExperiences = () => {
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
  };

  useEffect(updateExperiences, []);

  useEffect(() => {
    let config = {
      method: "get",
      url: "https://bestspot.herokuapp.com/user",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setUsers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <header className="website-header">
        <ResponsiveAppBar setLogged={setLogged} users={users} infos={infos} />
        <Routes>
          <Route path="/experiences" element={<AllSpots experiences={experiences} />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="update/:id" element={<UpdateSpot setExperiences={setExperiences} />} />
          <Route path="/create" element={<CreateSpot setExperiences={setExperiences} />} />
          <Route path="/" element={<HomePage experiences={experiences} />} />
          <Route path="/login" element={<LoginPage infos={infos} setInfos={setInfos} />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/experience/:id" element={<Spot experiences={experiences} />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
