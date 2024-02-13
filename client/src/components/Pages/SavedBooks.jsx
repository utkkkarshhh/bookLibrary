import React from "react";
import styles from "./SavedBooks.module.css";
import RemoveBookCard from "../UI/RemoveBookCard";

const SavedBooks = () => {
  const length = 2;
  return (
    <div>
      <div class={styles.savedBooksSection}>
        <h1 className={styles.heading}>Saved Books</h1>
        <div class={styles.bookCounter}>
          {length > 0 ? (
            <p>
              You have {length} {length === 1 ? "book" : "books"} in your
              reading list
            </p>
          ) : (
            <p>No books found. Add some books to get started!</p>
          )}
        </div>
      </div>
      <RemoveBookCard />
    </div>
  );
};

export default SavedBooks;
