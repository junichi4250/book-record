import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import RegisterBook from "../RegisterBook";

const ReadFeature: React.FC<{ title: string }> = ({ title }) => {
  const [readFeatureBooks, setReadFeatureBooks] = useState([
    {
      isbn: "",
      author: "",
      largeImageUrl: "",
      publisherName: "",
      title: "",
    },
  ]);
  useEffect(() => {
    const q = query(
      collection(db, "readFeature"),
      orderBy("timestamp", "desc")
    );
    const unSub = onSnapshot(q, (snapshot) => {
      setReadFeatureBooks(
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
      {readFeatureBooks[0]?.isbn && (
        <>
          {readFeatureBooks.map((readFeaturebook) => (
            <RegisterBook
              key={readFeaturebook.isbn}
              isbn={readFeaturebook.isbn}
              author={readFeaturebook.author}
              largeImageUrl={readFeaturebook.largeImageUrl}
              publisherName={readFeaturebook.publisherName}
              title={readFeaturebook.title}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ReadFeature;
