import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component {

  state = {
      query: '',
      searchedBooks: []
    }

/* Update query from search bar text */
  updateQuery = (query) => {
    this.setState({query})
    this.updateSearchedBooks(query);
  }

/*Update the list of returned books from the search results*/
  updateSearchedBooks = (query) => {
    if(query){
      BooksAPI.search(query).then((searchedBooks) => {
        if(searchedBooks.error){
          this.setState({searchedBooks: []});
        }
        else {
          this.setState({searchedBooks});
        }
      })
    }
    else {
      this.setState({searchedBooks: []});
    }
  }

  render() {
    return (
      <div className="search-books">
         <div className="search-books-bar">
             <Link to="/" className="close-search">Close</Link>
             <div className="search-books-input-wrapper">
               <input type="text"
                placeholder="Search by title or author"
                value = {this.state.query}
                onChange={(e) => this.updateQuery(e.target.value)}/>
             </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchedBooks.map(searchedBook => {
              /* Assign the bookshelf for the books returned for search and if they are in the current book list, give that shelf status */
              let bookShelf = "none";
              this.props.booklist.map(book => (
                book.id === searchedBook.id ? bookShelf= book.shelf: "none"
              ));

              return (
                <Book key={searchedBook.id} book={searchedBook} currentShelf={bookShelf} changeShelf={this.props.changeShelf}/>
              )
            })}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
