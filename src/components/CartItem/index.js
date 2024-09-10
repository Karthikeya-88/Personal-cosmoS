import CartContext from "../../context/CartContext";
import { VscClose } from "react-icons/vsc";
import "./index.css";

const CartItem = (props) => (
  <CartContext.Consumer>
    {(value) => {
      const { deleteCartItem } = value;
      const { cartItemDetails } = props;
      const { id, imageUrl, title } = cartItemDetails;

      const onDeleteCartItem = () => {
        deleteCartItem(id);
      };

      return (
        <li className="cart-list-li">
          <img src={imageUrl} alt={title} className="book-image" />
          <h1 className="book-title">{title}</h1>
          <h1 className="amount">Rs 400 /-</h1>
          <button
            type="button"
            className="remove-button"
            onClick={onDeleteCartItem}
          >
            <VscClose />
          </button>
        </li>
      );
    }}
  </CartContext.Consumer>
);

export default CartItem;
