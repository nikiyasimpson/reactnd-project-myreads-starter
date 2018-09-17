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
            {this.props.booklist.map((bookshelf) => (
              <BookShelf key={bookshelf.readStatus} bookshelf={bookshelf}/>
          ))}
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
        </div>
      )
      }

}

export default BookList
