import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import BookList from './BookList'
import SearchBar from './SearchBar'
import * as BooksAPI from './BooksAPI'

import './App.css'


class BooksApp extends React.Component {


state = {
  books :  [],
  selectedBook : {}
  }

  componentDidMount(){
      BooksAPI.getAll().then((books) => {
        this.setState({books})
      })
  }


  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookList booklist={this.state.books} />
        )}/>
        <Route path='/search' render={({ history }) => (
          <SearchBar />
        )}/>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
    	</div>
    )
  }
}


export default BooksApp
