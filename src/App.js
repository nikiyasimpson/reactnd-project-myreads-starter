import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import BookList from './BookList'
import Search from './Search'
import * as BooksAPI from './BooksAPI'
import './App.css'


class BooksApp extends React.Component {

  state = {
    books :  []
  }
/* This is the React Lifecycle that will pull book data from the API on the initial render*/
  componentDidMount(){
      BooksAPI.getAll().then((books) => {
        this.setState({books})
      })
  }

/* This is the function that updates the shelf for each book when a user initiates change. Also updates the book list. */
  changeShelf = (product, shelf) => {

    //updates book shelf
    BooksAPI.update(product, shelf);

    //updates the book list on the main page
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookList booklist={this.state.books} changeShelf = {this.changeShelf} />
        )}/>
        <Route path='/search' render={({ history }) => (
          <Search changeShelf = {this.changeShelf} booklist={this.state.books}/>
        )}/>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
    	</div>
    )
  }
}

export default BooksApp
