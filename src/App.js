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

  render() {
    return (
      <div className="app">
      <Route path='/search' render={() =>
         <Search books={this.state.books}/>
        } />
        <Route exact path='/' render={() =>
         <Shelves books={this.state.books}/>
        } />
      </div>
    )
  }
}

export default BooksApp
