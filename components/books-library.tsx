"use client";
import React, { useEffect, useState } from "react";

interface BooksData {
  id: number;
}

const BooksLibrary = () => {
  const [books, setBooks] = useState("");
  const fetchBooks = () => {
    fetch("https://gutendex.com/books/")
      .then((res) => res.json())
      .then((data) => console.log(data));
    //   .then((data) => console.log(data));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold">Books Library</h1>
    </div>
  );
};

export default BooksLibrary;
