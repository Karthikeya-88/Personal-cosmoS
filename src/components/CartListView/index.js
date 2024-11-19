import CartContext from "../../context/CartContext";
import CartItem from "../CartItem";
import "./index.css";

const CartListView = () => (
  <CartContext.Consumer>
    {(value) => {
      const { cartList } = value;
      return (
        <ul className="cart-list-ul">
          {cartList.map((each) => (
            <CartItem key={each.id} cartItemDetails={each} />
          ))}
        </ul>
      );
    }}
  </CartContext.Consumer>
);

export default CartListView;
