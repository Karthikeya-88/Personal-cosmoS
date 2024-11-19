import Header from "../Header";
import { Link } from "react-router-dom";

import "./index.css";

const Home = () => (
  <>
    <Header />
    <div className="home-header">
      <h1 className="home-quote">
        "What you do when no one is guiding you determines who you are"
      </h1>
      <Link to="/books">
        <button type="button" className="explore-button">
          Explore Novels
        </button>
      </Link>
    </div>
  </>
);

export default Home;
