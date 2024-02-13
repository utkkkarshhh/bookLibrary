import React from "react";
import styles from "./AddBookCard.module.css";

const AddBookCard = ({
  coverId,
  title,
  authorName,
  ratingsAverage,
  publishDate,
}) => {
  return (
    <div className={styles.bookCard}>
      <div className={styles.bookCover}>
        <img
          src={`https://covers.openlibrary.org/b/id/${coverId}-L.jpg`}
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
      <form action="/addToSaved" method="POST">
        <input type="hidden" name="bookTitle" value={title} />
        <input type="hidden" name="bookAuthor" value={authorName} />
        <input type="hidden" name="bookPublishDate" value={publishDate} />
        <input type="hidden" name="bookRating" value={ratingsAverage} />
        <input type="hidden" name="bookCoverId" value={coverId} />

        <button type="submit" className={styles.addButton}>
          &#10010;
        </button>
      </form>
    </div>
  );
};

export default AddBookCard;
