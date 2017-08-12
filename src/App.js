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
        if(item.name===book.name){
          item: book
        }else{
          item: item}
        })}
    )
  }

  addBook = (book) =>{
     this.setState(state => ({
        books: state.books.concat([ book ])
      }))
  }


  render() {
    return (
      <div className="app">
      <Route path='/search' render={() =>
         <Search books={this.state.books} newBook={(book)=>this.addBook(book)}/>
        } />
        <Route exact path='/' render={() =>
         <Shelves books={this.state.books} changeShelf={(book)=>this.updateShelf(book)}/>
        } />
      </div>
    )
  }
}

export default BooksApp
