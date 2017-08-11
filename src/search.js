import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'



class Search extends React.Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
	}


	state = {
		query: ''
	}

	updateQuery = (e) => {
		this.setState({
			query: e.target.value
		})
	}


    handleChange = (e, book) => {
    const shelfy = e.target.value
    book.shelf = shelfy
    this.props.changeShelf(book)
    
  
  } 


	render(){
		
		let showingBooks
		if(this.state.query){
			const match = new RegExp(escapeRegExp(this.state.query), 'i')
			showingBooks = this.props.books.filter((book) => match.test(book.title))

		} else{
			showingBooks = this.props.books
		}
		showingBooks.sort(sortBy('title'))





		return(
	 		<div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                {console.log(BooksAPI.getAll())/* 
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" value={this.state.query} onChange={this.updateQuery} placeholder="Search by title or author"/>

                
              </div>
            </div>
            <div className="search-books-results">

              <ol className="books-grid">
              {showingBooks.map((book) => (
          	     <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                          <select defaultValue={book.shelf} onChange={(e)=>this.handleChange(e, book)} >
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.authors}</div>
                    </div>
                  </li>
              	))}
              </ol>

            </div>
          </div>

         )

     }


}



export default Search