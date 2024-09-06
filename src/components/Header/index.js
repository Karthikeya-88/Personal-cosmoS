import "./index.css";
import { Link } from "react-router-dom";

import { FaHome, FaBook } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";

const Header = () => (
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
          <Link className="header-list-item" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="header-list-item" to="/books">
            Books
          </Link>
        </li>
        <li>
          <Link className="header-list-item" to="/about">
            About
          </Link>
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
          <Link to="/" className="nav-item-mobile">
            <FaHome className="nav-bar-icon" />
          </Link>
        </li>
        <li>
          <Link to="/books" className="nav-item-mobile">
            <FaBook className="nav-bar-icon" />
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-item-mobile">
            <MdContactSupport className="nav-bar-icon" />
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
