import React, { useState, useEffect } from "react";
import BookList from "../../livraria/BookList"; 
import "./BooksListPage.css";


export default function BooksListPage() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterAuthor, setFilterAuthor] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const url = "https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com";
  const resource = "/books";

  useEffect(() => {
    fetch(`${url}${resource}.json`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Resposta da API:", data);
        setBooks(data);
        setFilteredBooks(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os livros:", error);
      });
  }, []);

  useEffect(() => {
    console.log("Livros atualizados:", books);
  }, [books]); 

  const applyFilters = () => {
    const filtered = Object.values(books).filter((book) => {
      const titleMatch = !filterTitle || book.title.toLowerCase().includes(filterTitle.toLowerCase());
      const authorMatch = !filterAuthor || book.author.toLowerCase().includes(filterAuthor.toLowerCase());
      const categoryMatch = !filterCategory || book.genre.toLowerCase() === filterCategory.toLowerCase();

      return titleMatch && authorMatch && categoryMatch;
    });
    setFilteredBooks(filtered);
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Filtrar por título"
          value={filterTitle}
          onChange={(e) => setFilterTitle(e.target.value)}
          className="search-input"
        />
        <input
          type="text"
          placeholder="Filtrar por autor"
          value={filterAuthor}
          onChange={(e) => setFilterAuthor(e.target.value)}
          className="search-input"
        />
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="filter-select"
        >
          <option value="">Filtrar por categoria</option>
          <option value="Ficção">Ficção</option>
          <option value="Não-ficção">Não-ficção</option>
        </select>
        <button onClick={applyFilters} className="filter-button">Filtrar</button>
      </div>
      <div className="flex-container">
        <BookList books={filteredBooks} />
      </div>
    </div>
  );
}
