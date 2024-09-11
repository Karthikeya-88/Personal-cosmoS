import Header from "../Header";
import Popup from "reactjs-popup";
import CartContext from "../../context/CartContext";

import CartListView from "../CartListView";
import "./index.css";

const Cart = () => (
  <CartContext.Consumer>
    {(value) => {
      const { cartList } = value;
      const showOrderView = cartList.length === 0;

      return (
        <>
          <Header />
          {showOrderView ? (
            <div className="cart-list-container">
              <h1>Add a novel your Cartlist</h1>
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-3428210-2902552.png"
                alt="empty cart"
              />
            </div>
          ) : (
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
          )}
        </>
      );
    }}
  </CartContext.Consumer>
);

export default Cart;
