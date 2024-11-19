import React, { useState, useEffect, useRef } from "react";
import CartContext from "../../context/CartContext";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";

import { IoMdCloseCircleOutline } from "react-icons/io";
import "./index.css";

const BookData = (props) => {
  const [state, setState] = useState({ translateY: 0, opacity: 1 });
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const cardOffsetTop = cardRef.current.offsetTop;
      const cardHeight = cardRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      if (scrollTop + windowHeight > cardOffsetTop + cardHeight / 2) {
        setState({ translateY: 0, opacity: 1 });
      } else if (scrollTop + windowHeight < cardOffsetTop + cardHeight / 2) {
        setState({ translateY: 100, opacity: 0.4 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <CartContext.Consumer>
      {(value) => {
        const { addCartItem } = value;
        const { bookDetails } = props;
        const {
          title,
          author,
          imageUrl,
          availability,
          category,
          overview,
          publishedDate,
          pages,
        } = bookDetails;

        const onAddtoCart = () => {
          addCartItem({ ...bookDetails });
        };

        return (
          <li
            className="books-list"
            ref={cardRef}
            style={{
              transform: `translateY(${state.translateY}px)`,
              opacity: state.opacity,
            }}
          >
            <h1 className="book-title">{title}</h1>
            <p className="book-author">{author}</p>
            <div className="image-popup">
              <img src={imageUrl} alt={title} className="book-image" />
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
                        Category: <span className="span-item">{category}</span>
                      </li>
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

            <button
              type="button"
              className="order-button"
              onClick={onAddtoCart}
            >
              <Link to="/cart" className="order-button-link">
                Order Novel
              </Link>
            </button>
          </li>
        );
      }}
    </CartContext.Consumer>
  );
};

export default BookData;
