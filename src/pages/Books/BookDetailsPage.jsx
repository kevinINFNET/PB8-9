import React from "react";
import { useParams } from "react-router-dom";

const BookDetailsPage = () => {
  const { id } = useParams();

 
  const books = [
    { id: 1, title: "1984", author: "George Orwell", cover: "https://m.media-amazon.com/images/I/819js3EQwbL._AC_UF1000,1000_QL80_.jpg" },
    
  ];

  const book = books.find((book) => book.id === parseInt(id));

  if (!book) {
    return <div>Livro não encontrado.</div>;
  }

  return (
    <div>
      <h2>Detalhes do Livro</h2>
      <h3>Título: {book.title}</h3>
      <p>Autor: {book.author}</p>
      <img src={book.cover} alt={`Capa de ${book.title}`} />
    </div>
  );
};

export default BookDetailsPage;
