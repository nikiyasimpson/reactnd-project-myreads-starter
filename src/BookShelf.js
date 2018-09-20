/* This is the component for the bookshelf */

import React, { Component } from 'react'
import Book from './Book'



class BookShelf extends Component {





  render(){

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
              {this.props.books.map((bookItem) => (
                    <Book key={bookItem.id} book={bookItem} currentShelf={this.props.shelfValue} changeShelf={this.props.changeShelf}/>
                ))}

          </ol>
        </div>
      </div>
  )

  }

}

export default BookShelf
