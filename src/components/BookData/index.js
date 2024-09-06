import Popup from "reactjs-popup";
import "./index.css";

const BookData = (props) => {
  const { bookDetails } = props;
  const {
    id,
    title,
    author,
    imageUrl,
    availability,
    overview,
    publishedDate,
    pages,
  } = bookDetails;

  return (
    <li className="books-list">
      <h1 className="book-title">{title}</h1>
      <p className="book-author">{author}</p>
      <div className="image-popup">
        <img src={imageUrl} alt={id} className="book-image" />
        <Popup
          modal
          trigger={
            <button type="button" className="trigger-button">
              More Details
            </button>
          }
        >
          <ul className="popup-container">
            <li className="popup-items">{title}</li>
            <li className="popup-items">
              Published Date: <span className="span-item">{publishedDate}</span>
            </li>
            <li className="popup-items">
              Page Count: <span className="span-item">{pages}</span>
            </li>
            <li className="popup-items">
              Availabilty: <span className="span-item">{availability}</span>
            </li>
            <li className="popup-items">
              Overview: <span className="span-item">{overview} </span>
            </li>
          </ul>
        </Popup>
      </div>
    </li>
  );
};

export default BookData;
