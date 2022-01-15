import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import RegisterBook from "../RegisterBook";

const Read: React.FC<{ title: string }> = ({ title }) => {
  const [readBooks, setReadBooks] = useState([
    {
      isbn: "",
      author: "",
      largeImageUrl: "",
      publisherName: "",
      title: "",
    },
  ]);
  useEffect(() => {
    const q = query(collection(db, "readed"), orderBy("timestamp", "desc"));
    const unSub = onSnapshot(q, (snapshot) => {
      setReadBooks(
        snapshot.docs.map((doc) => ({
          isbn: doc.data().isbn,
          author: doc.data().author,
          largeImageUrl: doc.data().largeImageUrl,
          publisherName: doc.data().publisherName,
          title: doc.data().title,
        }))
      );
    });
    return () => {
      unSub();
    };
  }, []);
  return (
    <div>
      <p>
        <b>{title}</b>
      </p>
      {readBooks[0]?.isbn && (
        <>
          {readBooks.map((readbook) => (
            <RegisterBook
              key={readbook.isbn}
              isbn={readbook.isbn}
              author={readbook.author}
              largeImageUrl={readbook.largeImageUrl}
              publisherName={readbook.publisherName}
              title={readbook.title}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Read;
