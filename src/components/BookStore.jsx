import { Component } from "react";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import { Col, Row, Spinner, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { getBooksAction } from "../redux/actions";

const mapStateToProps = (state) => ({
  booksFromRedux: state.book.stock,
  areBooksLoading: state.book.isLoading,
  errorInFetching: state.book.isError
});

const mapDispatchToProps = (dispatch) => ({
  getBooks: () => {
    dispatch(getBooksAction());
  }
});

class BookStore extends Component {
  state = {
    // books: [],
    bookSelected: null
  };

  componentDidMount = async () => {
    await this.props.getBooks();
  };

  changeBook = (book) => this.setState({ bookSelected: book });

  render() {
    return (
      <Row>
        <Col md={4}>
          {this.props.areBooksLoading ? (
            <div className="text-center">
              <Spinner variant="primary" animation="border" />
            </div>
          ) : this.props.errorInFetching ? (
            <Alert variant="danger">Errol!!</Alert>
          ) : (
            <BookList
              bookSelected={this.state.bookSelected}
              changeBook={this.changeBook}
              books={this.props.booksFromRedux}
            />
          )}
        </Col>
        <Col md={8}>
          <BookDetail bookSelected={this.state.bookSelected} />
        </Col>
      </Row>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookStore);
