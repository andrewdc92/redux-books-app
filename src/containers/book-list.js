//only purpose here is to render a list of books

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
//this makes the state flow through the different reducer_books

class BookList extends Component {
  //renderList is the helper fn
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}</li>
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
  //whatever is returned form here shows up as props inside of BookList, this function is the glue between
  // react and redux. the returned object is available as this.props
  return {
      books: state.books
  };
}
// anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch){
  //whenever selectBook is called, the result will be passed to ALL of the reducers.
  // that's what bindActionCreators is doing with dispatch
    return bindActionCreators({ selectBook: selectBook}, dispatch)
}

// want to export the container, Promotes bookList from component to container
// needs to know about new dispatch method, selectBook. make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
