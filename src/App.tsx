import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import BookDetail from "./components/BookDetail";
import NotFoundPage from "./components/NotFoundPage";
import RegisterBookDetail from "./components/RegisterBookDetail ";
import Top from "./components/Top";
import Top2 from "./components/Top2";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/search" element={<Top />} />
        <Route path="/" element={<Top2 />} />
        <Route path="/book/:isbn" element={<BookDetail />} />
        <Route path="/readed/:isbn" element={<RegisterBookDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
