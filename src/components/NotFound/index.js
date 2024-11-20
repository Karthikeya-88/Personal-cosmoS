import Header from "../Header";
import "./index.css";

const NotFound = () => (
  <>
    <Header />
    <div className="not-found">
      <img
        src="https://gulfcoast.lifespanplatform.com/images/page-not-found.jpg"
        alt="Not Found"
      />
    </div>
  </>
);

export default NotFound;
