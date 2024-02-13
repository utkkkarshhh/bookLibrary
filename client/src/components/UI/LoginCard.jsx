// LoginCard.js
import React, { useState } from "react";
import axios from "axios";
import styles from "./LoginCard.module.css";

const LoginCard = ({ triggerRegisterCard, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      if (!email || !password) {
        throw new Error("Email and password are required.");
      }

      const response = await axios.post("http://localhost:8080/login", {
        email: email,
        password: password,
      });

      if (!response.data.success) {
        throw new Error(response.data.error || "Login failed");
      }
      onLogin();
    } catch (error) {
      setError(error.message || "Login failed");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <h1 className={styles.title}>Login</h1>
        <form className={styles.loginform} onSubmit={handleLogin}>
          <div className={styles.logininputBox}>
            <input
              type="email"
              placeholder="Email"
              className={styles.logininput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className={`fa fa-envelope ${styles.icon}`}></i>
          </div>

          <div className={styles.inputBox}>
            <input
              type="password"
              placeholder="Password"
              className={styles.logininput}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className={`fa fa-lock ${styles.icon}`}></i>
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" className={styles.loginCardbutton}>
            LOGIN
          </button>

          <div className={styles.links}>
            <a className={styles.link}>Forgot password?</a>
            <a onClick={triggerRegisterCard} className={styles.link}>
              Don't have an account?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginCard;
