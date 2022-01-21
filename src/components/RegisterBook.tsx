import { List } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

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
        <Link to={`/readed/${props.isbn}`}>
          <img src={props.largeImageUrl}></img>
        </Link>
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
