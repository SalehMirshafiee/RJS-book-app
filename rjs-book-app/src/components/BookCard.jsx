import { useState } from "react";
import { GoHeartFill } from "react-icons/go";

import styles from "./BookCard.module.css";

function BookCard({ data: { title, author, image, language, pages } }) {
  const [like, setlike] = useState(false);

  const likeHandler = () => setlike((like) => !like);

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <span>{language}</span>
          <span>{pages} pages</span>
        </div>
      </div>
      <button onClick={likeHandler}>
        <GoHeartFill color={like ? "#fa9374" : "#142f40"} fontSize="1.8rem" />
      </button>
    </div>
  );
}

export default BookCard;
