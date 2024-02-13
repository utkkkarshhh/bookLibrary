import React, { useState } from "react";
import styles from "./GenreForm.module.css";

const GenreForm = ({ onGenreSelect }) => {
  const handleGenreClick = (genre) => {
    onGenreSelect(genre);
  };

  return (
    <div>
      <form action="/" method="GET" className={styles.genreForm}>
        <div className={styles.genreButtons}>
          <button
            className={styles.genreButton}
            type="button"
            onClick={() => handleGenreClick("Fantasy")}
          >
            Fantasy
          </button>
          <button
            className={styles.genreButton}
            type="button"
            onClick={() => handleGenreClick("Mystery")}
          >
            Mystery
          </button>
          <button
            className={styles.genreButton}
            type="button"
            onClick={() => handleGenreClick("Fiction")}
          >
            Fiction
          </button>
          <button
            className={styles.genreButton}
            type="button"
            onClick={() => handleGenreClick("Crime")}
          >
            Crime
          </button>
          <button
            className={styles.genreButton}
            type="button"
            onClick={() => handleGenreClick("Science")}
          >
            Science
          </button>
          <button
            className={styles.genreButton}
            type="button"
            onClick={() => handleGenreClick("Narrative")}
          >
            Narrative
          </button>
          <button
            className={styles.genreButton}
            type="button"
            onClick={() => handleGenreClick("History")}
          >
            History
          </button>
          <button
            className={styles.genreButton}
            type="button"
            onClick={() => handleGenreClick("Sci-Fi")}
          >
            Sci-Fi
          </button>
          <button
            className={styles.genreButton}
            type="button"
            onClick={() => handleGenreClick("Memoir")}
          >
            Memoir
          </button>
          <button
            className={styles.genreButton}
            type="button"
            onClick={() => handleGenreClick("Self-Help")}
          >
            Self-Help
          </button>
        </div>
      </form>
    </div>
  );
};

export default GenreForm;
