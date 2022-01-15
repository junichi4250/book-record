import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import RegisterBook from "../RegisterBook";

const ReadStack: React.FC<{ title: string }> = ({ title }) => {
  const [readStackBooks, setReadStackBooks] = useState([
    {
      isbn: "",
      author: "",
      largeImageUrl: "",
      publisherName: "",
      title: "",
    },
  ]);
  useEffect(() => {
    const q = query(collection(db, "readStack"), orderBy("timestamp", "desc"));
    const unSub = onSnapshot(q, (snapshot) => {
      setReadStackBooks(
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
      {readStackBooks[0]?.isbn && (
        <>
          {readStackBooks.map((readStackbook) => (
            <RegisterBook
              key={readStackbook.isbn}
              isbn={readStackbook.isbn}
              author={readStackbook.author}
              largeImageUrl={readStackbook.largeImageUrl}
              publisherName={readStackbook.publisherName}
              title={readStackbook.title}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ReadStack;
