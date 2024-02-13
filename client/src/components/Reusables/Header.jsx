import styles from "./Header.module.css";
import React, { useContext } from "react";
import AuthContext from "../store/AuthContext.js";
import axios from "axios";

const Header = ({ placeholder }) => {
  const ctx = useContext(AuthContext);

  const logoutHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/logout");
      if (response.status === 200 && response.data.success) {
        ctx.onLogout();
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className={styles.headerContainer}>
      <a href="/">
        <h1>Book Library</h1>
      </a>

      {/* Search form */}
      {ctx.isLoggedIn && (
        <form action="/search" method="GET" className={styles.searchForm}>
          <div className={styles.searchInputContainer}>
            <input
              type="text"
              id="search"
              name="query"
              autoFocus
              autoComplete="off"
              placeholder={placeholder}
            />
            <button type="submit" className={styles.searchButton}>
              Find Books &#128269;
            </button>
          </div>
        </form>
      )}

      {!ctx.isLoggedIn && (
        <div className={styles.authButtons}>
          <form action="" method="GET" className={styles.authButtons}>
            <button type="submit" className={styles.authButton}>
              GitHub
            </button>
          </form>
          <form action="" method="GET" className={styles.authButtons}>
            <button type="submit" className={styles.authButton}>
              Contact Developer
            </button>
          </form>
        </div>
      )}

      {ctx.isLoggedIn && (
        <div className={styles.authButtons}>
          <form action="/savedBooks" method="GET" className={styles.savedBooks}>
            <button type="submit" className={styles.authButton}>
              Saved Books
            </button>
          </form>
          <form action="/logout" method="post" className={styles.logoutForm} onSubmit={logoutHandler}>
            <button
              type="submit"
              className={styles.authButton}
            >
              Logout
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Header;
