import React, { Component } from 'react'
import Book from './Book'



class BookShelf extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isShow: true,
    };
  }

  render(){

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.bookshelf.readStatus}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
              {this.props.bookshelf.books.map((bookItem) => (
                    <Book key={bookItem.id} book={bookItem}/>
                ))}

          </ol>
        </div>
      </div>
  )

  }

}

export default BookShelf
