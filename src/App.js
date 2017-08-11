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

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateShelf = (book) =>{
    this.setState({
      book: book
    })
  }


  render() {
    return (
      <div className="app">
      <Route path='/search' render={() =>
         <Search books={this.state.books} changeShelf={(book)=>this.updateShelf(book)}/>
        } />
        <Route exact path='/' render={() =>
         <Shelves books={this.state.books} changeShelf={(book)=>this.updateShelf(book)}/>
        } />
      </div>
    )
  }
}

export default BooksApp
