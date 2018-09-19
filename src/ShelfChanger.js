import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class ShelfChanger extends Component {

  handleChangeShelf = (book, e) => {
    BooksAPI.update(book, e.target.value);
  }


  render() {

    const product = this.props.product;

     return (
       <div className="book-shelf-changer">
        <form>
         <select id="readingStatus" onChange={(e) => this.handleChangeShelf(product, e)}>
           <option value="move" disabled>Move to...</option>
           <option value="currentlyReading">Currently Reading</option>
           <option value="wantToRead">Want to Read</option>
           <option value="read">Read</option>
           <option value="none">None</option>
         </select>
         </form>
       </div>

     )
   }
 }

 export default ShelfChanger
