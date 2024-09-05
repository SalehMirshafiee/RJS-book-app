import { useState } from "react";
import { books } from "../constants/mockData";
import BookCard from "./BookCard";

function Books() {
  const [liked, setliked] = useState([]);

  const handelLikedList = (book, status) => {
    if (status) {
      const newLikedList = liked.fillter((i) => i.id !== book.id);
      setliked(newLikedList);
    } else {
      setliked((liked) => [...liked, book]);
    }
  };

  return (
    <div>
      <div>
        {books.map((book) => (
          <BookCard
            key={book.id}
            data={book}
            handelLikedList={handelLikedList}
          />
        ))}
      </div>
      {!!liked.length && <div></div>}
    </div>
  );
}

export default Books;
