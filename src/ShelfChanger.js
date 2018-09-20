/*This component controls the change of the shelf*/

import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class ShelfChanger extends Component {

  render() {
    const product = this.props.product;

     return (
       <div className="book-shelf-changer">
        <form>
         <select id="readingStatus" onChange={(e) => this.props.changeShelf(product, e.target.value)} value={this.props.currentShelf}>
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
