import CartContext from "../../context/CartContext";

import "./index.css";
import { NavLink, Link } from "react-router-dom";

import { FaHome, FaBook } from "react-icons/fa";
import { PiShoppingCartFill } from "react-icons/pi";
import { MdContactSupport } from "react-icons/md";

const Header = () => {
  const renderCartItem = () => (
    <CartContext.Consumer>
      {(value) => {
        const { cartList } = value;
        const cartListCount = cartList.length;
        if (cartListCount > 0) {
          return <span className="cart-list-badge">{cartList.length}</span>;
        }
      }}
    </CartContext.Consumer>
  );

  return (
    <nav className="nav-header">
      <div className="header-container">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1725190246/Screenshot_1061_f8cr2b.png"
            alt="logo"
            className="logo-image"
          />
        </Link>
        <ul className="header-unorderedlist">
          <li>
            <NavLink
              className="header-list-item"
              activeclassname="active"
              to="/"
              exact
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="header-list-item"
              activeclassname="active"
              to="/books"
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              className="header-list-item"
              activeclassname="active"
              to="/cart"
            >
              Cart
              {renderCartItem()}
            </NavLink>
          </li>
          <li>
            <NavLink
              className="header-list-item"
              activeclassname="active"
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="header-mobileversion-container">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dnmyyqfhs/image/upload/v1725190246/Screenshot_1061_f8cr2b.png"
            alt="logo"
            className="logo-image"
          />
        </Link>
        <ul className="header-mobileversion-unorderedlist">
          <li>
            <NavLink
              to="/"
              className="nav-item-mobile"
              activeclassname="active"
              exact
            >
              <FaHome className="nav-bar-icon" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books"
              className="nav-item-mobile"
              activeclassname="active"
            >
              <FaBook className="nav-bar-icon" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className="nav-item-mobile"
              activeclassname="active"
            >
              <PiShoppingCartFill className="nav-bar-icon" />
              {renderCartItem()}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="nav-item-mobile"
              activeclassname="active"
            >
              <MdContactSupport className="nav-bar-icon" />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
