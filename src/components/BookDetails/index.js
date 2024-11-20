import { Component } from "react";

import "./index.css";

class BookData extends Component {
  state = {};

  componentDidMount() {
    this.getBookDetails();
  }

  getBookDetails = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    const api = `https://pc-backend-mbl7.vercel.app/books/${id}`;
    const response = await fetch(api);
    if (response.ok) {
      const fetchedData = await response.json();
      console.log(fetchedData);
    }
  };
}

export default BookData;
