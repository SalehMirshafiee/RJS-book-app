import { useState } from "react";
import { GoHeartFill } from "react-icons/go";

function BookCard({ data: { title, author, image, language, pages } }) {
  const [like, setlike] = useState(false);

  const likeHandler = () => setlike((like) => !like);

  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <span>{language}</span>
          <span>{pages} pages</span>
        </div>
      </div>
      <button onClick={likeHandler}>
        <GoHeartFill color={like ? "#efefef" : "#142f40"} fontSize="1.8rem" />
      </button>
    </div>
  );
}

export default BookCard;
