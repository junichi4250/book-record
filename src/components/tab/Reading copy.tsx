import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import RegisterBook from "../RegisterBook";

const Reading: React.FC<{ title: string }> = ({ title }) => {
  const [readingBooks, setReadingBooks] = useState([
    {
      isbn: "",
      author: "",
      largeImageUrl: "",
      publisherName: "",
      title: "",
    },
  ]);
  useEffect(() => {
    const q = query(collection(db, "reading"), orderBy("timestamp", "desc"));
    const unSub = onSnapshot(q, (snapshot) => {
      setReadingBooks(
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
      {readingBooks[0]?.isbn && (
        <>
          {readingBooks.map((readingbook) => (
            <RegisterBook
              key={readingbook.isbn}
              isbn={readingbook.isbn}
              author={readingbook.author}
              largeImageUrl={readingbook.largeImageUrl}
              publisherName={readingbook.publisherName}
              title={readingbook.title}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Reading;
