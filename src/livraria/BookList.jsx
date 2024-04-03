import React from "react";
import CardBook from "./CardBook";

export default function BookList({ books }) {
  console.log("Books:", books);

  if (!books) {
    console.log("Books is undefined or null.");
    return <div>Não há livros disponíveis.</div>;
  }
  const booksArray = Object.values(books);

  const arrayMapped = booksArray.map((book) => (
    <CardBook
      key={book.ISBN}
      book={book}
    />
  ));

  

  return arrayMapped;
}
