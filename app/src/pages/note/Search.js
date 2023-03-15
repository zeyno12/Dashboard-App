import React from 'react';
import "./Note.css"

const Search = ({ handleSearchNote }) => {
	return (
		<div className='search'>
		<i className="bi bi-search search-icons"></i>
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='type to search...'
			/>
		</div>
	);
};

export default Search;
