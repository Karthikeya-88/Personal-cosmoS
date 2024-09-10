import { Component } from "react";
import { CiSearch } from "react-icons/ci";
import PuffLoader from "react-spinners/PuffLoader";
import "./index.css";

import BookData from "../BookData";
import Header from "../Header";

class Books extends Component {
  state = { booksData: [], searchInput: "", isLoading: true };

  componentDidMount() {
    this.getBooks();
  }

  getBooks = async () => {
    const api = "https://run.mocky.io/v3/87e6ab64-c7f8-4797-9cb3-72947cd625f3";
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
    const updatedData = data.data.books.map((each) => ({
      id: each.id,
      title: each.title,
      author: each.author,
      imageUrl: each.imageUrl,
      availability: each.availability,
      pages: each.pages,
      publishedDate: each.published_date,
      overview: each.overview,
    }));
    this.setState({ booksData: updatedData, isLoading: false });
  };

  onChangeSearch = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  renderNoBooks = () => {
    return (
      <div>
        <p>Sorry, No Book found</p>
      </div>
    );
  };

  render() {
    const { booksData, searchInput, isLoading } = this.state;

    return (
      <>
        <Header />
        <div className="books-input">
          <input
            type="search"
            placeholder="Search"
            value={searchInput}
            onChange={this.onChangeSearch}
            className="search-bar"
          />
          <CiSearch />
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
                return searchInput.toLowerCase() !== ""
                  ? each.title.toLowerCase().includes(searchInput)
                  : this.renderNoBooks();
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
