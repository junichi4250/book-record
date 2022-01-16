import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <div>
        <Link to={"/search"}>books-record</Link>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>本を登録する</Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper: React.FC = styled.header`
  background-color: #219315;
  display: flex;
  align-items: center;
  > div {
    > a {
      color: white;
      text-decoration: none;
    }
    > nav {
      margin-left: auto;
      display: flex;

      > ul {
        padding: 0;
        display: flex;

        margin: 0;
        > li {
          list-style-type: none;

          > a {
            color: white;
            text-decoration: none;
            padding: 0 20px;
          }
        }
      }
    }
  }
`;

export default Header;
