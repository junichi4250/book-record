import { List } from "@material-ui/core";
import React from "react";

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
const Books: React.FC<PROPS> = (props) => {
  return (
    <div>
      <div>
        <List>
          <img src={props.largeImageUrl}></img>
        </List>
      </div>
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
