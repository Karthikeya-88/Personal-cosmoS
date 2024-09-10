import Header from "../Header";
import Popup from "reactjs-popup";

import CartListView from "../CartListView";
import "./index.css";

const Cart = () => (
  <>
    <Header />
    <div className="cart-list-container">
      <h1>My Books</h1>
      <CartListView />
      <Popup
        modal
        trigger={
          <button type="button" className="order-placed-button">
            Confirm Order
          </button>
        }
      >
        <div className="order-placed-container">
          <p>Your order has been placed</p>
        </div>
      </Popup>
    </div>
  </>
);

export default Cart;
