import { Box, Button, List, Modal, Typography } from "@material-ui/core";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

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
    toast("登録しました");
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
    toast("登録しました");
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
    toast("登録しました");
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
    toast("登録しました");
    setOpen(false);
  };

  return (
    <div>
      <div>
        <List>
          <img src={props.largeImageUrl}></img>
        </List>
      </div>
      <Button onClick={handleOpen}>本を登録</Button>
      <Toaster />
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography>Text in a modal</Typography>
          <Typography>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
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
      <ul>
        <li>{props.title}</li>
        <li>{props.subTitle}</li>
        <li>{props.author}</li>
        <li>{props.itemPrice}</li>
        <li>{props.publisherName}</li>
      </ul>
    </div>
  );
};

export default Books;
