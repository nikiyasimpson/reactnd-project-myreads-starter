import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'


class SearchBar extends Component {

  state = {
      query: '',
      searchedBooks: []
    }

  updateQuery = (query) => {
    this.setState({query})
    this.updateSearchedBooks(query);
  }

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

    /*let bookDisplay
    if (this.state.query) {
        const match = new RegExp(escapeRegExp(this.state.query), 'i')
        bookDisplay = this.props.books.filter(book) =>
          match.test(book.title)
        )
        else {
          bookDisplay = this.props.books
        }
    }*/
    return (
/*
      if (this.state.query) {
        const match = new RegExp(escapeRegExp(this.state.query),
      'i')
      }
      else {
        this.setState({searchedBooks})
      }
      */

      <div className="search-books">
           <div className="search-books-bar">

             <Link to="/" className="close-search">Close</Link>
             <div className="search-books-input-wrapper">
               {



                 /*
                 NOTES: The search from BooksAPI is limited to a particular set of search terms.
                 You can find these search terms here:
                 https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                 However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                 you don't find a specific author or title. Every search is limited by search terms.
               */}
               <input type="text" placeholder="Search by title or author"
               value = {this.state.query}
               onChange={(event) => this.updateQuery(event.target.value)}/>

             </div>
           </div>
           <div className="search-books-results">
             <ol className="books-grid">
              {this.state.searchedBooks.map(searchedBook => (
                  <Book key={searchedBook.id} book={searchedBook} currentShelf='none' changeShelf={this.props.changeShelf}/>
              ))}
             </ol>
           </div>
         </div>

    )
}
}

export default SearchBar
