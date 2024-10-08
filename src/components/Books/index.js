import { Component } from "react";
import axios from "axios";
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
    const api = "https://run.mocky.io/v3/c14b9878-df3c-4173-a944-61d1cc4ee9cc";
    const options = {
      method: "GET",
      timeout: 10000,
    };
    try {
      const response = await axios.get(api, options);
      if (response.status === 200) {
        const data = await response.data;
        console.log(data);
        const updatedData = data.books.map((each) => ({
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
