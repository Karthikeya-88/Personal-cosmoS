import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import About from "./components/About";
import Home from "./components/Home";
import Books from "./components/Books";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import CartContext from "./context/CartContext";

class App extends Component {
  state = { cartList: [] };

  deleteCartItem = (id) => {
    const { cartList } = this.state;
    const updatedCartList = cartList.filter((eachItem) => eachItem.id !== id);
    this.setState({ cartList: updatedCartList });
  };

  addCartItem = (book) => {
    const { cartList } = this.state;
    const bookObject = cartList.find((eachItem) => eachItem.id === book.id);

    if (bookObject) {
      this.setState((prevState) => ({
        cartList: prevState.cartList.map((eachItem) => {
          if (bookObject.id === eachItem.id) {
            const updateBookQuantity = eachItem.quantity + book.quantity;

            return { ...eachItem, quantity: updateBookQuantity };
          }
          return eachItem;
        }),
      }));
    } else {
      const updateCartList = [...cartList, book];
      this.setState({ cartList: updateCartList });
    }
  };

  render() {
    const { cartList } = this.state;
    return (
      <BrowserRouter>
        <CartContext.Provider
          value={{
            cartList,
            addCartItem: this.addCartItem,
            deleteCartItem: this.deleteCartItem,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/books" element={<Books />} exact />
            <Route path="/about" element={<About />} exact />
            <Route path="/cart" element={<Cart />} exact />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
