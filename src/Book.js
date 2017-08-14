import React from 'react'

class Book extends React.Component {

		handleChange = (e, book) => {
		const shelfy = e.target.value
		book.shelf = shelfy
		this.props.shelfChange(book)
		
	
	}	

	render(){
		return(
			  <li key={this.props.book.id}>
		                    <div className="book">
		                      <div className="book-top">
		                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>
		                        <div className="book-shelf-changer">
		                          <select defaultValue={this.props.book.shelf} onChange={(e)=>this.handleChange(e, this.props.book)}>
		                            <option value="none" disabled>Move to...</option>
		                            <option value="currentlyReading">Currently Reading</option>
		                            <option value="wantToRead">Want to Read</option>
		                            <option value="read">Read</option>
		                            <option value="none">None</option>
		                          </select>
		                        </div>
		                      </div>
		                      <div className="book-title">{this.props.book.title}</div>
		                      <div className="book-authors">{this.props.book.authors}</div>
		                    </div>
                  		</li>

			)

	}


}

export default Book