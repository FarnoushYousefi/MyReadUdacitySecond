import React from 'react'
import Shelf from './Shelf'

const Shelves =({books, updateBookShelf})=>{

    const currenlyReading=books.filter((book)=>book.shelf==="currentlyReading");
    const whatToRead=books.filter((book)=>book.shelf==="wantToRead");
    const read=books.filter((book)=>book.shelf==="read");

    return (
        <div>
          <Shelf title ="Currently Reading" books={currenlyReading} updateBookShelf={updateBookShelf}/>
          <Shelf title ="Want To Read" books={whatToRead} updateBookShelf={updateBookShelf}/>
          <Shelf title ="Read" books={read} updateBookShelf={updateBookShelf}/>

        </div>
        
    )

}

export default Shelves;