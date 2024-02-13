import React, { useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  login: (email, password) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, onLogin: login, onLogout: logout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
