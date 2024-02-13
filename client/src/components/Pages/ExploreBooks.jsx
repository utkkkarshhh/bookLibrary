import React, { useState, useEffect } from "react";
import styles from "./ExploreBooks.module.css";
import GenreForm from "../UI/GenreForm";
import AddBookCard from "../UI/AddBookCard";
import axios from "axios";

const ExploreBooks = () => {
  const [books, setBooks] = useState([]);
  const [placeholder, setPlaceholder] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Fantasy");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/${selectedGenre}`)
      .then((response) => {
        const { books, placeholder, selectedGenre } = response.data;
        setBooks(books);
        setPlaceholder(placeholder);
        setSelectedGenre(selectedGenre);
      })
      .catch((error) => console.error("Error fetching data: ", error))
      .finally(()=> {setLoading(false)});
  }, [selectedGenre]);

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div className={styles.exploreBooksSection}>
      <h1 className={styles.heading}>Explore Books</h1>
      <GenreForm onGenreSelect={handleGenreSelect} />
      <div className={styles.bookContainer}>
        {loading ? (
          <p>Loading...</p>
        ) : books && books.length > 0 ? (
          books.map((book) => (
            <AddBookCard
              key={book.key}
              coverId={book.cover_id}
              title={book.title}
              authorName={book.author_name}
              ratingsAverage={book.ratings_average}
              publishDate={book.publish_date}
            />
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default ExploreBooks;
