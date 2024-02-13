import React from "react";
import styles from "./RemoveBookCard.module.css";

const RemoveBookCard = () => {
  // const bookId = "240727";
  const title = "The Hobbit";
  const authorName = "Utkarsh";
  const publishDate = "2000-01-01";
  const ratingsAverage = "4.5";

  return (
    <div className={styles.bookCard}>
      <div className={styles.bookCover}>
        <img
          src={`https://covers.openlibrary.org/b/id/240727-L.jpg`}
          alt="Book Cover"
        />
      </div>
      <div className={styles.bookDetails}>
        <h2>{title}</h2>
        <p>
          <b>Author:</b> {authorName}
        </p>
        <p>
          <b>Rating:</b> {ratingsAverage}
        </p>
        <p>
          <b>Published:</b> {publishDate}
        </p>
      </div>
      {/* Delete button */}
      <form action="/delete" method="POST">
        <input type="hidden" name="deleteItemId" value="<%= book.id %>" />
        <button type="submit" className={styles.deleteButton}>
          &#10006;
        </button>
      </form>
    </div>
  );
};

export default RemoveBookCard;
