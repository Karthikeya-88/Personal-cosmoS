import CartContext from "../../context/CartContext";
import Popup from "reactjs-popup";

import { IoMdCloseCircleOutline } from "react-icons/io";
import "./index.css";

const BookData = (props) => (
  <CartContext.Consumer>
    {(value) => {
      const { addCartItem } = value;
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

      const onAddtoCart = () => {
        addCartItem({ ...bookDetails });
      };

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
              {(close) => (
                <>
                  <ul className="popup-container">
                    <button
                      type="button"
                      className="close-button"
                      onClick={() => close()}
                    >
                      <IoMdCloseCircleOutline className="close-button close" />
                    </button>
                    <li className="popup-items">{title}</li>
                    <li className="popup-items">
                      Published Date:{" "}
                      <span className="span-item">{publishedDate}</span>
                    </li>
                    <li className="popup-items">
                      Page Count: <span className="span-item">{pages}</span>
                    </li>
                    <li className="popup-items">
                      Availabilty:{" "}
                      <span className="span-item">{availability}</span>
                    </li>
                    <li className="popup-items">
                      Overview: <span className="span-item">{overview} </span>
                    </li>
                  </ul>
                </>
              )}
            </Popup>
          </div>
          <button type="button" className="order-button" onClick={onAddtoCart}>
            Order Novel
          </button>
        </li>
      );
    }}
  </CartContext.Consumer>
);

export default BookData;
