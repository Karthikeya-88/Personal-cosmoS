import { Component } from "react";
import { CiSearch } from "react-icons/ci";
import { GrAscend, GrDescend } from "react-icons/gr";
import PuffLoader from "react-spinners/PuffLoader";
import "./index.css";

import BookData from "../BookData";
import Header from "../Header";

class Books extends Component {
  state = {
    booksData: [],
    searchInput: "",
    isLoading: true,
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks = async () => {
    try {
      const response = await fetch(`https://pc-backend-mbl7.vercel.app/books`);
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        const updatedData = data.books.map((each) => ({
          id: each.id,
          title: each.title,
          author: each.author,
          category: each.category,
          imageUrl: each.imageUrl,
          availability: each.availability,
          pages: each.pages,
          publishedDate: each.published_date,
          overview: each.overview,
        }));
        this.setState({ booksData: updatedData, isLoading: false });
      } else {
        console.log("Error:", response.status);
      }
    } catch (error) {
      console.log("Error Fetching Books:", error);
    }
  };

  onChangeSearch = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  sortAscending = () => {
    const { booksData } = this.state;
    this.setState({
      booksData: booksData
        .slice()
        .sort((a, b) => a.title.localeCompare(b.title)),
    });
  };

  sortDescending = () => {
    const { booksData } = this.state;
    this.setState({
      booksData: booksData
        .slice()
        .sort((b, a) => a.title.localeCompare(b.title)),
    });
  };

  renderNoBooks = () => (
    <div>
      <p>Sorry, No Book found</p>
    </div>
  );

  render() {
    const { booksData, searchInput, isLoading } = this.state;

    return (
      <>
        <Header />
        <div className="books-input">
          <div>
            <button
              type="button"
              className="asc-button"
              onClick={this.sortAscending}
            >
              <GrAscend />
            </button>
            <button
              type="button"
              className="asc-button"
              onClick={this.sortDescending}
            >
              <GrDescend />
            </button>
          </div>
          <form
            className="search-bar"
            style={{ display: "flex", alignItems: "center" }}
          >
            <input
              type="search"
              placeholder="Search"
              value={searchInput}
              onChange={this.onChangeSearch}
              style={{ border: "0" }}
            />
            <CiSearch style={{ fontSize: "medium" }} />
          </form>
        </div>
        {isLoading ? (
          <div className="loader-spinner">
            <PuffLoader
              color="#000000"
              loading={true}
              size={160}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <ul className="books-unordered-list">
            {booksData
              .filter((each) => {
                return searchInput.toLowerCase() === ""
                  ? this.renderNoBooks()
                  : each.title.toLowerCase().includes(searchInput);
              })
              .map((each) => (
                <BookData key={each.id} bookDetails={each} />
              ))}
          </ul>
        )}
      </>
    );
  }
}

export default Books;
