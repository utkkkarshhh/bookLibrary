const { Pool } = require("pg");

const db = new Pool({
    user: "postgres",
    host: "localhost",
    database: "books",
    password: "utkarsh",
    port: 8000,
  });

db.connect((err) => {
  if (err) {
    console.error("Error connecting to PostgreSQL:", err);
  } else {
    console.log("Connected to PostgreSQL Successfully");
  }
});

module.exports = db;
