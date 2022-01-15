import { List } from "@material-ui/core";
import React from "react";

interface PROPS {
  isbn: string;
  author: string;
  largeImageUrl: string;
  publisherName: string;
  title: string;
}

const RegisterBook: React.FC<PROPS> = (props) => {
  return (
    <div>
      <List>
        <img src={props.largeImageUrl}></img>
      </List>
      <ul>
        <li>{props.title}</li>
        <li>{props.author}</li>
        <li>{props.publisherName}</li>
      </ul>
    </div>
  );
};

export default RegisterBook;
