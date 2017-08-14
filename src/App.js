import React from 'react'
import * as BooksAPI from './BooksAPI'
import Search from './Search'
import Shelves from './Shelves'
import './App.css'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateShelf = (book) =>{
    this.setState(state=>{
      state.books.map(item=>{
        if(item.title===book.title){
          item: book
        }else{
          item: item}
        })}
    )
    BooksAPI.update(book, book.shelf)
  }



  addBook = (book) =>{
    const updatedVersion =this.state.books.filter(b=>b.id !== book.id)
     this.setState(state => ({
        books: updatedVersion.concat([ book ])
      }))
  }


  render() {
    return (
      <div className="app">
        <Route path='/search' render={() =>
           <Search books={this.state.books} newBook={(book)=>this.addBook(book)}/>
          } />
      
          <Route exact path='/' render={() =>
             <div>
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                 <Shelves books={this.state.books.filter(book=>(book.shelf==="currentlyReading"))} title={"Currently Reading"} changeShelf={(book)=>this.updateShelf(book)}/>
                 <Shelves books={this.state.books.filter(book=>(book.shelf==="wantToRead"))} title={"Want to Read"} changeShelf={(book)=>this.updateShelf(book)}/>
                 <Shelves books={this.state.books.filter(book=>(book.shelf==="read"))} title={"Read"} changeShelf={(book)=>this.updateShelf(book)}/>
            </div>
          } />
        
      </div>
    )
  }
}

export default BooksApp
