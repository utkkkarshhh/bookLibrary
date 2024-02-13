import React, { useState, useContext } from "react";
import styles from "./LandingRoute.module.css";
import LoginCard from "../UI/LoginCard";
import RegisterCard from "../UI/RegisterCard";
import AuthContext from "../store/AuthContext";

const LandingRoute = () => {
  const ctx = useContext(AuthContext);

  const [showRegister, setShowRegister] = useState(false);
  const toggleCard = () => {
    setShowRegister(!showRegister);
  };

  return (
    <div className={styles.welcomeContainer}>
      <h1 className={styles.heading}> Welcome to the Book Library!</h1>
      {showRegister ? (
        <RegisterCard triggerLoginCard={toggleCard} />
      ) : (
        <LoginCard triggerRegisterCard={toggleCard} onLogin={ctx.onLogin} />
      )}
    </div>
  );
};

export default LandingRoute;
