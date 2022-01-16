import { Card, CardContent, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { Book } from "../type/book";
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

const BookDetail: React.FC = () => {
  const [bookDetails, setBookDetails] = useState([]);
  const { isbn } = useParams<{ isbn: string }>();

  useEffect(() => {
    axios
      .get(
        `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&isbn=${isbn}&applicationId=${apiKey}`
      )
      .then((res) => {
        setBookDetails(res.data.Items);
        console.log(res.data.Items);
      });
  }, []);

  // const fetchBook = () => {
  //   axios
  //     .get(
  //       `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&isbn=${isbn}&applicationId=${apiKey}`
  //     )
  //     .then((res) => setBookDetails(res.data.Items));
  // };
  return (
    <div>
      <Header />
      <Card>
        <CardContent>
          {bookDetails.map((bookDetail: Book) => (
            <p> isbn={bookDetail.Item.isbn}</p>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default BookDetail;
