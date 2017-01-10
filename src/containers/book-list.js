//only purpose here is to render a list of books

import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookList extends Component {
  //renderList is the helper fn
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }
  //for each book in the array, create an li that contains the books title
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //whatever is returned form here shows up as props
  // inside of BookList
  return {
      books: state.books
  };
}
// want to export the container
export default connect(mapStateToProps)(BookList);
