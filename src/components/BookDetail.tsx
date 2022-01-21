import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { db } from "../firebase";
import Header from "./Header";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px #000",
  boxShadow: 24,
  p: 4,
};

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
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const readed = (props: Item) => {
    // 登録処理
    addDoc(collection(db, "readed"), {
      isbn: props.isbn,
      author: props.author,
      largeImageUrl: props.largeImageUrl,
      publisherName: props.publisherName,
      title: props.title,
      timestamp: serverTimestamp(),
    });
    toast("読んだ本に登録しました");
    setOpen(false);
  };
  const reading = (props: Item) => {
    // 登録処理
    addDoc(collection(db, "reading"), {
      isbn: props.isbn,
      author: props.author,
      largeImageUrl: props.largeImageUrl,
      publisherName: props.publisherName,
      title: props.title,
      timestamp: serverTimestamp(),
    });
    toast("読んでいる本に登録しました");
    setOpen(false);
  };
  const readStack = (props: Item) => {
    // 登録処理
    addDoc(collection(db, "readStack"), {
      isbn: props.isbn,
      author: props.author,
      largeImageUrl: props.largeImageUrl,
      publisherName: props.publisherName,
      title: props.title,
      timestamp: serverTimestamp(),
    });
    toast("積読本に登録しました");
    setOpen(false);
  };
  const readFeature = (props: Item) => {
    // 登録処理
    addDoc(collection(db, "readFeature"), {
      isbn: props.isbn,
      author: props.author,
      largeImageUrl: props.largeImageUrl,
      publisherName: props.publisherName,
      title: props.title,
      timestamp: serverTimestamp(),
    });
    toast("読みたい本に登録しました");
    setOpen(false);
  };

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
                <Button onClick={handleOpen}>本を登録</Button>
              </div>
            ))}
          </CardContent>

          <Toaster />
          <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
              {bookDetails.map((bookDetail: Book) => (
                <ul>
                  <li>
                    <Button onClick={() => readed(bookDetail.Item)}>
                      読んだ本に登録
                    </Button>
                  </li>
                  <li>
                    <Button onClick={() => reading(bookDetail.Item)}>
                      読んでいる本に登録
                    </Button>
                  </li>
                  <li>
                    <Button onClick={() => readStack(bookDetail.Item)}>
                      積読本に登録
                    </Button>
                  </li>
                  <li>
                    <Button onClick={() => readFeature(bookDetail.Item)}>
                      読みたい本に登録
                    </Button>
                  </li>
                </ul>
              ))}
            </Box>
          </Modal>
        </Card>
      </CardWrapper>
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
export default BookDetail;
