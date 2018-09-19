import React, { Component } from 'react'
import BookShelf from './BookShelf'


class BookList extends Component {

  render() {

      console.log('Props',this.props);
      return (
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf title='Currently Reading' books={this.props.booklist.filter((book) =>
              book.shelf === 'currentlyReading')}/>
            <BookShelf title='Want to Read' books={this.props.booklist.filter((book) =>
                book.shelf === 'wantToRead')}/>
            <BookShelf title='Read' books={this.props.booklist.filter((book) =>
              book.shelf === 'read')}/>
          </div>
        </div>

        </div>
      )
      }

}

export default BookList
