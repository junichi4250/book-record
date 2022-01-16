import { Box, Button, List, Modal, Typography } from "@material-ui/core";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface PROPS {
  isbn: Int16Array;
  author: string;
  itemPrice: Int16Array;
  itemUrl: string;
  largeImageUrl: string;
  publisherName: string;
  title: string;
  subTitle: string;
}

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

const Books: React.FC<PROPS> = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const readed = () => {
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
  const reading = () => {
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
  const readStack = () => {
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
  const readFeature = () => {
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

  return (
    <BookList>
      <ul>
        <li>
          <div>
            <List>
              <img src={props.largeImageUrl}></img>
            </List>
          </div>
        </li>
        <li>
          {" "}
          <Button onClick={handleOpen}>+本を登録する</Button>
        </li>
        <li>
          <Link to={`/book/${props.isbn}`}>{props.title} </Link>
        </li>
        <li>{props.author}</li>
      </ul>

      <Toaster />
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <ul>
            <li>
              <Button onClick={readed}>読んだ本に登録</Button>
            </li>
            <li>
              <Button onClick={reading}>読んでいる本に登録</Button>
            </li>
            <li>
              <Button onClick={readStack}>積読本に登録</Button>
            </li>
            <li>
              <Button onClick={readFeature}>読みたい本に登録</Button>
            </li>
          </ul>
        </Box>
      </Modal>
    </BookList>
  );
};

const BookList: React.FC = styled.div`
  > ul {
    list-style: none;
    padding: 0px;
    > li {
      color: #219315;
      font-size: 14px;
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      > a {
        color: #219315;
        font-weight: bold;
        text-decoration: none;
      }
      > div {
        > image {
          position: relative;
          &:hover {
          }
        }
      }
      > button {
        width: 100%;
        text-align: center;
        margin: 0px;
        color: white;
        background-color: #219315;
        &:hover {
          background-color: #ffa500;
        }
      }
    }
  }
`;

export default Books;
