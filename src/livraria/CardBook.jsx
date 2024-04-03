import React from "react";
import "./CardBook.css";
import { Link } from "react-router-dom"; 

const CardBook = ({ book }) => {
  if (!book) {
    return <div>Informações do livro não disponíveis.</div>;
  }

  const { title, author, cover, id } = book; 

  return (
    <Link to={`/book/${id}`} className="card-link"> 
      <div className="container">
        <div className="card-book">
          <h3>{title}</h3>
          <p>Autor: {author}</p>
          <img src={cover} alt={`Capa de ${title}`} className="img-book" />
        </div>
      </div>
    </Link>
  );
};

export default CardBook;
