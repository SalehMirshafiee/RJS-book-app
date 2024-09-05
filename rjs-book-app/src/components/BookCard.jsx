import { GoHeartFill } from "react-icons/go";

function BookCard({ data: { title, author, image, language, pages } }) {
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
      <button>
        <GoHeartFill />
      </button>
    </div>
  );
}

export default BookCard;
