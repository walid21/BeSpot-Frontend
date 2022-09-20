import React, { useState, useEffect } from "react";
import axios from "axios";
const API_URL = "http://localhost:5005";

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };
  const removeToken = () => {
    localStorage.removeItem("authToken");
  };

  /* 
    Functions for handling the authentication status (isLoggedIn, isLoading, user)
    will be added here later in the next step
  */

  return <AuthContext.Provider value={{ isLoggedIn, isLoading, user, setUser, storeToken, removeToken }}>{props.children}</AuthContext.Provider>;
}

export { AuthProviderWrapper, AuthContext };
