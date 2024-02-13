import React, { useState } from "react";
import styles from "./RegisterCard.module.css";
import axios from "axios";

const RegisterCard = ({ triggerLoginCard }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      if (!name || !email || !password) {
        throw new Error("All fields are required!");
      }

      // Server-side validation can catch duplicate email addresses
      const response = await axios.post("http://localhost:8080/register", {
        name: name,
        email: email,
        password: password,
      });

      if (response.data.success) {
        console.log("Registration successful");
        setName("");
        setEmail("");
        setPassword("");
        triggerLoginCard(); // Automatically switch to login after successful registration
      } else {
        throw new Error(response.data.error || "Registration failed");
      }
    } catch (error) {
      setError(error.message || "Registration failed");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.register}>
        <h1 className={styles.title}>Register</h1>
        <form
          className={styles.registerform}
          onSubmit={handleRegister}
          action="/register"
          method="post"
        >
          <div className={styles.registerinputBox}>
            <input
              type="text"
              placeholder="Name"
              className={styles.registerinput}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
            <i className={`fa fa-envelope ${styles.icon}`}></i>
          </div>

          <div className={styles.registerinputBox}>
            <input
              type="email"
              placeholder="Email"
              className={styles.registerinput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <i className={`fa fa-envelope ${styles.icon}`}></i>
          </div>

          <div className={styles.inputBox}>
            <input
              type="password"
              placeholder="Password"
              className={styles.registerinput}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={8} 
              required
            />
            <i className={`fa fa-lock ${styles.icon}`}></i>
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" className={styles.registerCardbutton}>
            Register
          </button>

          <div className={styles.links}>
            <a className={styles.link}>Forgot password?</a>
            <a className={styles.link} onClick={triggerLoginCard}>
              Already have an account?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterCard;
