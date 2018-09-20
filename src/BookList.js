/*This is the main page of the project, it lists all of the books (or other products) */
import React, { Component } from 'react'
import BookShelf from './BookShelf'


class BookList extends Component {

  render() {

      console.log('Props',this.props);
      return (
        <div className="list-books">
        <div className="list-books-title">
          <h1>My Tech Reading List</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf title='Currently Reading' shelfValue='currentlyReading' changeShelf={this.props.changeShelf}  books={this.props.booklist.filter((book) =>
              book.shelf === 'currentlyReading')}/>
            <BookShelf title='Want to Read' shelfValue='wantToRead' changeShelf={this.props.changeShelf} books={this.props.booklist.filter((book) =>
                book.shelf === 'wantToRead')}/>
            <BookShelf title='Read' shelfValue='read' changeShelf={this.props.changeShelf} books={this.props.booklist.filter((book) =>
              book.shelf === 'read')}/>
          </div>
        </div>

        </div>
      )
      }

}

export default BookList
