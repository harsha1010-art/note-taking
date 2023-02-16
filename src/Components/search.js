import React from 'react';



const Search = ({ handleSearchNote }) => {
	return (
		<div className='search1'>
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='type to search...'
                className='search'
			/>
		</div>
	);
};

export default Search;