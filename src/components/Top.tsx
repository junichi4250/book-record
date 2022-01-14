import React, { useEffect, useState } from "react";
import axios from "axios";
import Books from "./Books";
import Header from "./Header";

type Book = {
  Item: Item;
};

type Item = {
  isbn: Int16Array;
  author: string;
  itemPrice: Int16Array;
  itemUrl: string;
  largeImageUrl: string;
  publisherName: string;
  title: string;
  subTitle: string;
};

const apiKey = process.env.REACT_APP_RAKUTEN_BOOKS_APIKEY;

const RAKUTEN_BOOKS_API_URL = `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&title=%E5%A4%AA%E9%99%BD&booksGenreId=001004008&applicationId=${apiKey}`;

const Top: React.FC = () => {
  const [books, setBooks] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios.get(RAKUTEN_BOOKS_API_URL).then((res) => {
      setBooks(res.data.Items);
    });
  }, []);

  const searchBooks = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // apiを叩く
    axios
      .get(
        `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&title=${searchValue}&booksGenreId=001004008&applicationId=${apiKey}`
      )
      .then((res) => {
        setBooks(res.data.Items);
      });

    setSearchValue("");
  };
  return (
    <div>
      {" "}
      <Header />
      <form>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
        />
        <input onClick={searchBooks} type="submit" value="search" />
      </form>
      <ul>
        {books.map((book: Book) => (
          <Books
            isbn={book.Item.isbn}
            author={book.Item.author}
            itemPrice={book.Item.itemPrice}
            itemUrl={book.Item.itemUrl}
            largeImageUrl={book.Item.largeImageUrl}
            publisherName={book.Item.publisherName}
            title={book.Item.title}
            subTitle={book.Item.subTitle}
          />
          // <li key={index}>
          //   {" "}
          //   {index} : {book.Item.author}{" "}
          // </li>
        ))}
      </ul>
    </div>
  );
};

export default Top;
