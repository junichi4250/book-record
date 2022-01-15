import React, { useEffect, useState } from "react";
import axios from "axios";
import Books from "./Books";
import Header from "./Header";
import Tab from "./Tab";
import Modal from "./Modal";
import Read from "./tab/Read";
import Reading from "./tab/ReadFeature";
import styled from "styled-components";
import ReadStack from "./tab/ReadStack";
import ReadFeature from "./tab/ReadFeature";

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

const Top2: React.FC = () => {
  return (
    <Wrap>
      <div>
        {" "}
        <Header />
        <Tab
          title={["読んだ本", "読んでいる本", "積読本", "読みたい本"]}
          content={[
            <Read title={"読んだ本"} />,
            <Reading title={"読んでいる本"} />,
            <ReadStack title={"積読本"} />,
            <ReadFeature title={"読みたい本"} />,
          ]}
        />
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin: auto;
`;

export default Top2;
