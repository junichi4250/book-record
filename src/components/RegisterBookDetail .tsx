import { Card, CardContent, CardMedia } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import MemoForm from "./MemoForm";

const apiKey = process.env.REACT_APP_RAKUTEN_BOOKS_APIKEY;

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

const RegisterBookDetail = () => {
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
  return (
    <div>
      <Header />

      <CardWrapper>
        <Card>
          {bookDetails.map((bookDetail: Book) => (
            <CardMedia component="img" src={bookDetail.Item.largeImageUrl} />
          ))}

          <CardContent>
            {bookDetails.map((bookDetail: Book) => (
              <div>
                <h1>{bookDetail.Item.title}</h1>
                <div>
                  <span>著者：{bookDetail.Item.author}</span>
                </div>
                <div>
                  <span>{bookDetail.Item.publisherName}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </CardWrapper>

      <MemoForm />
    </div>
  );
};

const CardWrapper: React.FC = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1004px;
  padding-top: 30px;

  > div {
    padding: 50px;
    display: flex;
    > img {
      width: 200px;
      margin-right: 80px;
      box-shadow: 2px 2px 4px gray;
    }
    > div {
      padding: 0px;
      > div {
        > p {
          font-size: 20px;
        }
      }
    }
  }
`;

export default RegisterBookDetail;
