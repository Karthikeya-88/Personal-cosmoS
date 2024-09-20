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
            <div className="empty-carriage">
              <h1>Add a novel to your Cartlist</h1>
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-3428210-2902552.png"
                alt="empty cart"
              />
            </div>
          ) : (
            <div className="cart-list-container">
              <h1>My Books</h1>
              <CartListView />
              <h1 className="order-total-amount">
                Your Order Total = {cartList.length * 400}
              </h1>
              <Popup
                modal
                trigger={
                  <button type="button" className="order-placed-button">
                    Confirm Order
                  </button>
                }
              >
                <div className="order-placed-container">
                  <p>Thanks for shopping with us!</p>
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
