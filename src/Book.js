/*This component is for the book*/
import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends Component {

  render() {
    /* Renders book component */
    /*Finds the book thumbnail and if not found assigns not found image */
    let thumbnail;
    if(this.props.book.imageLinks){
      thumbnail = this.props.book.imageLinks.smallThumbnail;
    }
    else {
      thumbnail = 'book-not-found.jpeg';
    }

     return (
        <li key={this.props.book.id} className=''>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
              <ShelfChanger product={this.props.book} currentShelf={this.props.currentShelf} changeShelf={this.props.changeShelf}/>
            </div>
            <div className="book-title">{this.props.book.title}</div>
            <div className="book-authors">{this.props.book.authors}</div>
          </div>
        </li>
     )
   }
 }

 export default Book
