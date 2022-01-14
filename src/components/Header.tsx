import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header>
      <div className={styles.header}>
        <h2>BOOKS</h2>
      </div>
      <div className={styles.header_main}>
        <input type="text" />
        <input type="submit" value="search" />
      </div>
    </header>
  );
};

export default Header;
